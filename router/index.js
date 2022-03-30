const express = require('express')

const UsersController = require('../controller')

const router = express.Router()

router.post('/user', UsersController.createUser)
router.get('/users', UsersController.getUsers)

module.exports = router