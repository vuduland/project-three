// CRUD ROUTE
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Pin = require('../models/Pin');

// @route   GET api/contacts === pins
// @desc    Get all user's contacts === pins
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // or { location: req.lat, location: req.lng }
    const pins = await Pin.find({ location }).sort(
      // sorts by date, descending order?
      {
        date: -1
      }
    );
    res.json(pins);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/contacts === pins
// @desc    Add new contact === pin
// @access  Private or Public?
router.post(
  '/',
  [
    auth,
    [
      check('lat', 'Latitude is required')
        .not()
        .isEmpty(),
      check('lng', 'Longitude is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // how do we pull this data from the pic's metadata? and how do we link it here?
    const { address, location, date, type } = req.body;

    try {
      const newPin = new Pin({
        address,
        lat: lat,
        // or:
        // location: req.lat,
        // location: req.lng
        id: req.id.id,
        date,
        type
      });

      const pin = await newPin.save();

      res.json(pin);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/contacts:id ||
// @desc    Update contact === pin
// @access  Private or public?
router.put('/:id', auth, async (req, res) => {
  const { address, location, date, type } = req.body;

  // Build pin object  !!!! PAUSED REFACTORING HERE !!!
  const pinFields = {};
  if (address) pinFields.address = address;
  if (location) pinFields.location = location;
  if (phone) pinFields.phone = phone;
  if (type) pinFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found.' });

    // Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/contacts:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({ msg: 'Contact not found.' });

    // Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not Authorized' });
    }

    await Contact.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Contact removed.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
