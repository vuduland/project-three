import passport from 'passport';

module.exports = app => {
    app.get('/findUser', (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user, info) => {
            if (err) {
                console.log(err);
            }
            if (info != undefined) {
                console.log(info.message);
                res.send(info.message);
            } else {
                console.log('user found in db from route');
                res.status(200).send({
                    auth: true,
                    username: user.username,
                    password: user.password,
                    email: user.email,
                    message: 'user found in db',
                });
            }
        })(req, res, next);
    });
};
