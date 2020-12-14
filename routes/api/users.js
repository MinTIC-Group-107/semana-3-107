const router = require('express').Router()
const userController = require('../../controllers/UserController')

// api/user/
router.get('/', userController.index)

// api/user/register
router.get('/register', userController.register)

module.exports = router
