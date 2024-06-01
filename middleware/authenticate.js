const checkAuth = (req, res, next) => {
  
  if (!req.isAuthenticated()) {
    return res.status(401).json('You do not have access. Please log in.');
  }
  next();
};

module.exports = { checkAuth };