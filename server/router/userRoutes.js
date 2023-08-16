const express = require('express')
const router = express.Router()
const loginControl = require('../controller/loginController')
const {verify} = require('../middleware/verify')

router.route('/signup').post(loginControl.signup)
router.route('/login').post(loginControl.login)
router.route('/forget-Password').post(verify,loginControl.forgotPassword)
router.route('/reset-Password').post(verify,loginControl.resetPassword)
module.exports = router