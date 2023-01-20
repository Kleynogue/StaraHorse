const express = require('express');
const router = express.Router();
const reports = require('../controllers/reports');

router.use(express.json());
router.use(express.text());

//Primera entrega
router.get('/reports/users', reports.getUsers);
router.get('/reports/stud-1', reports.getStuds_1);
router.get('/reports/stud-2', reports.getStuds_2);
router.get('/reports/stud-3', reports.getStuds_3);
router.get('/reports/horses', reports.getHorses);
router.get('/reports/implements', reports.getImplements);
router.get('/reports/trainers', reports.getTrainers);
router.get('/reports/jockey', reports.getJockey);
router.get('/reports/restaurants', reports.getRestaurants);

//Segunda entrega
router.get('/reports/classic_winners', reports.getWinners);
router.get('/reports/winners_15', reports.getWinners_1);
router.get('/reports/jockey_history', reports.getHistory);
router.get('/reports/jockey_stat', reports.jockeyStat);
router.get('/reports/horse_stat', reports.horseStat);
router.get('/reports/mix_stat', reports.mixStat);
router.get('/reports/betTotal-1', reports.betTotal_1);
router.get('/reports/betTotal-2', reports.betTotal_2);
router.get('/reports/betTotal-3', reports.betTotal_3);
router.get('/reports/ticketTotal', reports.ticketTotal);
router.get('/reports/AVG_Implement-1', reports.avgImp);
router.get('/reports/AVG_Implement-2', reports.avgImp_1);
router.get('/reports/frequency', reports.frequency);
router.get('/reports/avg_weight', reports.weight);
router.get('/reports/avg_horse', reports.avgHorse_1);
router.get('/reports/avg_horse1', reports.avgHorse_2);
router.get('/reports/parents', reports.parents);

module.exports = router;