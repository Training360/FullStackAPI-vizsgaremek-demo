const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
// Biztonságosabb megoldás, az adatbázis használata.
// Példa: https://www.npmjs.com/package/mongoose-bcrypt

// (async () => {
//     const admin = new UserModel({ name: 'Admin', email: 'admin@gmail.com', password: 'admin_pw' });
//     const user = new UserModel({ name: 'User', email: 'user@gmail.com', password: 'user_pw' });
//     await admin.save();
//     await user.save();
// })();

const refreshTokens = [];

module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({email});
        if (!user) {
            throw new Error('User not found!');
        }

        const verified = await user.verifyPassword(password);
        if (!verified) {
            throw new Error('Incorrect Credentials!');
        }

        const accessToken = jwt.sign({
            email: user.email,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRY
        });

        const refreshToken = jwt.sign({
            email: user.email,
            role: user.role
        }, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);

        res.json({
            accessToken,
            refreshToken,
            user
        });

    } catch(e) {
        res.send('Username or password incorrect.');
    }

};


module.exports.refresh = (req, res, next) => {
    const { token } = req.body;

    if (!token) {
        return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
        console.log(refreshTokens, token);
        return res.sendStatus(403);
    }

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        const accessToken = jwt.sign({
            username: user.username,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRY
        });

        res.json({
            accessToken
        });
    });
};

module.exports.logout = (req, res) => {
    const { token } = req.body;

    if (!refreshTokens.includes(token)) {
        res.sendStatus(403);
    }

    const tokenIndex = refreshTokens.indexOf(token);
    refreshTokens.splice(tokenIndex, 1);

    res.sendStatus(200);
};
