const express = require('express')
const router = express.Router()

const { login, Dashboard } = require('../controllers/main')
const authenticate = require('../middleware/auth')


router.route('/dashboard').get(authenticate, Dashboard)
router.route('/login').post(login)

module.exports = router
