const router = require('express').Router();
const UserRoutes = require('./UserRoutes');

router.use('/user', UserRoutes);

module.exports = router;