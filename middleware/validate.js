const validator = require('../helpers/validate');

const saveMovie = (req, res, next) => {
    const validationRule = {
      title: 'required|string',
      director: 'required|string',
      genre: 'required|string',
      releaseYear: 'required|string',
      rating: 'required|string',
      youtubeTrailer: 'required|string',
      reviewRating: 'required|string',
      seasons: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
};

const saveShow = (req, res, next) => {
  const validationRule = {
    title: 'required|string',
    director: 'required|string',
    genre: 'required|string',
    releaseYear: 'required|string',
    rating: 'required|string',
    youtubeTrailer: 'required|string',
    reviewRating: 'required|string',
    seasons: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

  module.exports = {
    saveMovie,
    saveShow
  };