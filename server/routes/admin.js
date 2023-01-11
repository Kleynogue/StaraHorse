const  express  = require('express');
const router = express.Router();
const { index, insert, edit, update, remove } = require('../controllers/admin');
const handlers = require('../settings/handlers');

router.use(express.json());
router.use(express.text());

router.get('/Admin/:table', index);
router.post('/Admin/:table/create',insert);
router.get('/Admin/:table/edit/:id',edit);  
router.post('/Admin/:table/edit/:id',update);
router.post('/Admin/:table/:id',remove);

module.exports = router;