const AuthController = require('../controller/AuthController')
const checkJWT = require('../middlewares/checkJWT')
const router = require('express').Router()


//login
router.post('/login', AuthController.login)

//change password
router.post('/change-password', [checkJWT], AuthController.changePassword)

module.exports = router