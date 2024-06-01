exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) { 
            // If an error occurs during logout, pass it to the error handling middleware
            return next(err); 
        }
        
        // If logout is successful, destroy the session associated with the current request
        req.session.destroy((err) => {
            if (err) { 
                // If an error occurs during session destruction, pass it to the error handling middleware
                return next(err); 
            }
            
            // If session destruction is successful, redirect the user to the home page
            res.redirect('/');
        });
    });
};