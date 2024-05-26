const Show = require('../models/show'); // Ensure you have a Show model
const mongoose = require('mongoose');

// Get all shows
const getAllShows = async (req, res) => {
  //#swagger.tags=['Shows']
  try {
    const shows = await Show.find();
    res.status(200).json(shows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single show
const getShowById = async (req, res) => {
  //#swagger.tags=['Shows']
  try {
    // Check if the id passed in is a valid object
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }
  
    // Convert the ID to an ObjectId
    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const show = await Show.findById(objectId);
    if (!show) {
      return res.status(404).json({ message: 'Show not found' });
    }
    res.status(200).json(show);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new show
const createShow = async (req, res) => {
  //#swagger.tags=['Shows']
  console.log(req.body);
  const show = req.body;

  const newShow = new Show(show);

  try {
    const savedShow = await newShow.save(null, { select: '-__v' });
    res.status(201).json(savedShow);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a show
const updateShow = async (req, res) => {

  const update = req.body;
  try {
    // Check if the id passed in is a valid object
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }
  
    // Convert the ID to an ObjectId
    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const show = await Show.findById(objectId);
    if (!show) {
      return res.status(404).json({ message: 'Show not found' });
    }
    const updatedShow = await Show.findByIdAndUpdate(objectId, update, { new: true });
    
    res.status(200).json(updatedShow);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a show
const deleteShow = async (req, res) => {
  try {
    // Check if the id passed in is a valid object
    if (!mongoose.isValidObjectId(req.params.id)) {
      throw new Error('Invalid ID format');
    }
  
    // Convert the ID to an ObjectId
    const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

    const show = await Show.findById(objectId);
    if (!show) {
      return res.status(404).json({ message: 'Show not found' });
    }

    const deletedShow = await Show.findByIdAndDelete(objectId);
    console.log(deletedShow);
    
    res.status(200).json({ message: 'The show was deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { 
  getAllShows,
  getShowById,
  createShow,
  updateShow,
  deleteShow 
};