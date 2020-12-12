const router = require('express').Router()
const apiRouterUser = require('./api/users')
const apiRouterAuth = require('./api/auth')

router.use('/auth', apiRouterAuth) // .com/api/auth
router.use('/user', apiRouterUser) // .com/api/user

module.exports = router
