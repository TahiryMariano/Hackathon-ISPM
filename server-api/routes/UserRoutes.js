const router = require('express').Router();
const UserController = require('../controller/UserController');
const checkRole = require('../middlewares/checkRole');
const checkJWT = require('../middlewares/checkJWT')

router.get('/', [checkJWT, checkRole(["admin"])], UserController.listAllUsers)

router.get('/:id', [checkJWT, checkRole(["admin"])], UserController.getOneUserById)

router.post("/", [checkJWT, checkRole(["admin"])], UserController.newUser)

router.patch('/:id', [checkJWT, checkRole([" admin"])], UserController.editUser)

router.delete('/:id', [checkJWT, checkRole(["admin"])], UserController.deleteUser)

module.exports = router;