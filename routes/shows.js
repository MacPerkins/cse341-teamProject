const express = require('express');
const router = express.Router();
const showsController = require('../controllers/showsController');
const validation = require('../middleware/validate.js');

// GET REQUESTS
router.get('/', showsController.getAllShows);
router.get('/:id', showsController.getShowById);

// POST REQUEST
router.post(
    '/',
    validation.saveShow,
    showsController.createShow
);

// PUT REQUEST
router.put(
    '/:id',
    validation.saveShow,
    showsController.updateShow
);

// DELETE REQUEST
router.delete('/:id', showsController.deleteShow);

module.exports = router;