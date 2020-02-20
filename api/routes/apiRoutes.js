const axios = require('axios');
const router = require('express').Router();

const TrashTag = require('../models/trashtagModel');
const User = require('../models/userModel');

router.get('/pins', (req, res, next) => {
  res.send();
});
router.post('/pins', (req, res, next) => {});
// router.update('/tags/:id'), (req, res, next) => {};
router.delete('/pins/:id', (req, res, next) => {});

router.get('/tags', (req, res, next) => {});
router.post('/tags', (req, res, next) => {});
// router.update('/tags/:id'), (req, res, next) => {};
router.delete('/tags/:id'), (req, res, next) => {};

export const router = router;
