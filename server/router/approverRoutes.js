const express = require('express')
const router = express.Router()
const approver = require('../controller/ApproveController')

router.route('/forApproval').get(approver.getAllSubmittedForms)

module.exports = router

