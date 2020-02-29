const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Pin = require('../models/Pin');
//paste in router.get pin.find
// @route     GET api/pins
// @desc      Get all users pins
// @access    Private
router.get('/', async (req, res) => {
  try {
    const pins = await Pin.find({  }).sort({
      date: -1
    });
    res.json(pins);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/pins
// @desc      Add new pin
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, lat, lng, picUrl, type } = req.body;

    try {
      const newPin = new Pin({
        name,
        lat,
        lng, 
        picUrl,
        type,
        user: req.user.id
      });

      const pin = await newPin.save();

      res.json(pin);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/pins/:id
// @desc      Update pin
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { name, lat, lng, picUrl, type } = req.body;

  // Build pin object
  const pinFields = {};
  if (name) pinFields.name = name;
  if (lat) pinFields.lat = lat;
  if (lng) pinFields.lng = lng;
  if (picUrl) pinFields.picUrl = picUrl;
  if (type) pinFields.type = type;

  try {
    let pin = await Pin.findById(req.params.id);

    if (!pin) return res.status(404).json({ msg: 'Pin not found' });

    // Make sure user owns pin
    if (pin.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    pin = await Pin.findByIdAndUpdate(
      req.params.id,
      { $set: pinFields },
      { new: true }
    );

    res.json(pin);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/pins/:id
// @desc      Delete pin
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let pin = await Pin.findById(req.params.id);

    if (!pin) return res.status(404).json({ msg: 'Pin not found' });

    // Make sure user owns pin
    if (pin.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Pin.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Pin removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
