const express = require('express');
const router = express.Router();
const showsController = require('../controllers/showsController');
const validation = require('../middleware/validate.js');
const authenticate = require('../middleware/authenticate.js');

// GET REQUESTS
router.get('/', showsController.getAllShows);
router.get('/:id', showsController.getShowById);

// POST REQUEST
router.post(
    '/',
    authenticate.checkAuth, 
    validation.saveShow,
    showsController.createShow
);

// PUT REQUEST
router.put(
    '/:id',
    authenticate.checkAuth,
    validation.saveShow,
    showsController.updateShow
);

// DELETE REQUEST
router.delete('/:id', showsController.deleteShow);

module.exports = router;