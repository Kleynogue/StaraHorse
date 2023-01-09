const express = require('express');
const router = express.Router();
const { getUsers, getStuds_1, getStuds_2, getStuds_3, getHorses, getImplements, getTrainers, getJockey, getRestaurants } = require('../controllers/reports');

router.use(express.json());
router.use(express.text());

router.get('/reports/users', getUsers);
router.get('/reports/stud-1', getStuds_1);
router.get('/reports/stud-2', getStuds_2);
router.get('/reports/stud-3', getStuds_3);
router.get('/reports/horses', getHorses);
router.get('/reports/implements', getImplements);
router.get('/reports/trainers', getTrainers);
router.get('/reports/jockey', getJockey);
router.get('/reports/restaurants', getRestaurants);

module.exports = router;