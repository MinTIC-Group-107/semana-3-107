const router = require('express').Router()
const userController = require('../../controllers/UserController')

// api/user/
router.get('/', userController.index) //Listado de usuarios

module.exports = router
