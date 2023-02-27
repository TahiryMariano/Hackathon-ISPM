const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

const checkJWT = (req, res, next) => {
    const token = req.headers.authorization
    let jwtPayload

    //try to validate token and get data
    try {
        jwtPayload = jwt.verify(token, accessTokenSecret)
        res.locals.jwtPayload = jwtPayload
    } catch (error) {
        //if token is not valid, respond with 401 status
        res.status(401).json({
            message: "Unauthorized token"
        })
        return
    }

    //The token is valid for 1 hour
    const { userId, email } = jwtPayload;
    const newToken = jwt.sign({ userId, email }, accessTokenSecret, { expiresIn: 3600 })
    res.setHeader("Token", newToken)

    //call the next middleware or controller
    next()
}

module.exports = checkJWT