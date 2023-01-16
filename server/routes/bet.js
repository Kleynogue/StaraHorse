const express = require('express');
const router = express.Router();
const { show, type, race, horse, insert, insert_1 } = require('../controllers/bet');
const { validateBet } = require('../settings/handlers')

router.use(express.json());
router.use(express.text());

router.get('/bet', validateBet, show);
router.get('/bet/edit', validateBet, type);
router.get('/bet/edit/race', validateBet, race);
router.get('/bet/edit/horse', validateBet, horse);
router.post('/bet', validateBet, insert);
router.post('/bet/edit', validateBet, insert_1);

module.exports = router;
