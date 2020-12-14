const router = require('express').Router()
const userController = require('../../controllers/UserController')

// api/auth/signin
router.post('/signin', userController.signin)

// api/auth/register
router.post('/register', userController.register)

module.exports = router
