const jwt = require('jsonwebtoken');

module.exports = (user, expiresIn) => {
    const token = !expiresIn ? jwt.sign({
            id: user.id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: expiresIn ? parseInt(process.env.JWT_REFRESH_TIME) : parseInt(process.env.JWT_ACCESS_TIME)
        }
    )
    : jwt.sign({
            id: user.id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: expiresIn ? parseInt(process.env.JWT_REFRESH_TIME) : parseInt(process.env.JWT_ACCESS_TIME)
        }
    )
    
    return token
}