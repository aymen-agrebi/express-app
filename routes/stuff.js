const express = require('express');
const router = express.Router();
const multerf = require('../middleware/multer-config');
const auth = require('../middleware/auth');
const ctrlStuff = require('../controllers/stuff');

router.get('/', auth,ctrlStuff.getAllThings );
router.post('/', auth, multerf, ctrlStuff.createThing);
router.get('/:id', auth, ctrlStuff.getOneThing );
router.put('/:id', auth, multerf, ctrlStuff.modifyThing);
router.delete('/:id', auth, ctrlStuff.deleteThing );

module.exports = router;