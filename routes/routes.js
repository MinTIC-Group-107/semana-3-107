const controller = require('../controller/controller.js')
const express = require('express')
const router = express.Router()

router.post('/signin', controller.signin)

router.post('/register', controller.register)


module.exports = router