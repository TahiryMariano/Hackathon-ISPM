const router = require('express').Router();
const UserRoutes = require('./UserRoutes');
const AuthRoutes = require('./AuthRoutes')

router.use('/user', UserRoutes);

router.use('/auth', AuthRoutes)

module.exports = router;