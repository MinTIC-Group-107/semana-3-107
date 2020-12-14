const router = require('express').Router()
const userController = require('../../controllers/UserController')

// api/auth/signin
router.post('/signin', userController.signin)

module.exports = router
