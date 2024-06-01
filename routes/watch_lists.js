const express = require('express');
const router = express.Router();
const watchListController = require('../controllers/watch_lists.js');
const validation = require('../middleware/validate.js');
const authenticate = require('../middleware/authenticate.js');

// GET REQUESTS
router.get('/', watchListController.getAllWatchLists);
router.get('/:id', watchListController.getWatchListById);

// POST REQUEST
router.post(
    '/',
    authenticate.checkAuth,
    validation.saveList,
    watchListController.createWatchList
);

// PUT REQUEST
router.put(
    '/:id',
    authenticate.checkAuth,
    validation.saveList,
    watchListController.updateWatchList
);

// DELETE REQUEST
router.delete('/:id', watchListController.deleteWatchList);

module.exports = router;
