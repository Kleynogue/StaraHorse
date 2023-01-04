const express = require('express');
const router = express.Router();
const { insert } = require('./controller');

router.use(express.json());
router.use(express.text());

router.post('/', insert);

module.exports = router;