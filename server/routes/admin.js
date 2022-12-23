const  express  = require('express');
const router = express.Router();
const { index, insert, edit, update, remove } = require('../controllers/admin');

router.use(express.json());
router.use(express.text());

router.get('/Admin/:table',index);
router.post('/Admin/:table/create',insert);
router.get('/Admin/:table/edit/:id',edit);
router.put('/Admin/:table/edit/:id',update);
router.delete('/Admin/:table',remove);

module.exports = router;