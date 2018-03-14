module.exports = {
    getUser:  (req, res) => {
        // sending user info back to front end 
        res.json({user: req.session.user})
        },

        destroyUser: (req, res) => {
            //destroying session
            req.session.destroy();
            //sending default 200 error code
            res.send();
        }, 

}