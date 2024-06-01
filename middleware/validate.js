const validator = require('../helpers/validate');

const saveMovie = (req, res, next) => {
    const validationRule = {
      title: 'required|string',
      director: 'required|string',
      genre: 'required|string',
      releaseYear: 'required|numeric',
      rating: 'required|string',
      youtubeTrailer: 'required|string',
      reviewRating: 'required|numeric',
      language: 'required|string'
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
    releaseYear: 'required|numeric',
    rating: 'required|numeric',
    youtubeTrailer: 'required|string',
    reviewRating: 'required|numeric',
    seasons: 'required|numeric',
    language: 'required|string'
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

const saveList = (req, res, next) => {
  const validationRule = {
    username: 'required|string',
    media_type: 'required|string',
    title: 'required|string',
    added_date: 'required|string',
    watched: 'required|boolean',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Watch-List Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveAccount = (req, res, next) => {
  const validationRule = {
    fullName: 'required|string',
    username: 'required|string',
    email: 'required|email',
    githubId: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Account Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

  module.exports = {
    saveMovie,
    saveShow,
    saveList,
    saveAccount
  };