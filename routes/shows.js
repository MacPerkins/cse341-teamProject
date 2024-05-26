const express = require('express');
const router = express.Router();
const showsController = require('../controllers/showsController');

router.get('/', showsController.getAllShows);
router.get('/:id', showsController.getShowById);
router.post('/', showsController.createShow);
router.put('/:id', showsController.updateShow);
router.delete('/:id', showsController.deleteShow);

module.exports = router;