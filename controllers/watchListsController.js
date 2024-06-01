const WatchList = require('../models/watch_lists'); // Ensure you have a WatchList model
const mongoose = require('mongoose');

// Get all Watch Lists
const getAllWatchLists = async (req, res) => {
  //#swagger.tags=['Watch-List']
  try {
    const watch_list = await WatchList.find();
    res.status(200).json(watch_list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single Watch List Item
const getWatchListById = async (req, res) => {
  //#swagger.tags=['Watch-List']
  try {
    // Check if the id passed in is a valid object
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }
  
    // Convert the ID to an ObjectId
    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const watch_list = await WatchList.findById(objectId);
    if (!watch_list) {
      return res.status(404).json({ message: 'WatchList not found' });
    }
    res.status(200).json(watch_list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new watch-list
const createWatchList = async (req, res) => {
  //#swagger.tags=['Watch-List']
  console.log(req.body);
  const watch_list = req.body;

  const newWatchList = new WatchList(watch_list);

  try {
    const newWatch_list = await newWatchList.save(null, { select: '-__v' });
    res.status(201).json(newWatch_list);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a watch-list
const updateWatchList = async (req, res) => {
  //#swagger.tags=['Watch-List']
  const update = req.body;
  try {
    // Check if the id passed in is a valid object
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }
  
    // Convert the ID to an ObjectId
    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const watch_list = await WatchList.findById(objectId);
    if (!watch_list) {
      return res.status(404).json({ message: 'WatchList not found' });
    }
    const updatedWatchList = await WatchList.findByIdAndUpdate(objectId, update, { new: true });
    
    res.status(200).json(updatedWatchList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a watch-list
const deleteWatchList = async (req, res) => {
    //#swagger.tags=['Watch-List']
  try {
    // Check if the id passed in is a valid object
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }
  
    // Convert the ID to an ObjectId
    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const watch_list = await WatchList.findById(objectId);
    if (!watch_list) {
      return res.status(404).json({ message: 'Watch-list not found' });
    }

    const deletedWatchList = await WatchList.findByIdAndDelete(objectId);
    console.log(deletedWatchList);
    
    res.status(200).json({ message: 'The watch-list was deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { 
  getAllWatchLists,
  getWatchListById,
  createWatchList,
  updateWatchList,
  deleteWatchList
};