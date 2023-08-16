const express = require('express')
const router = express.Router()
const approver = require('../controller/ApproveController')

router.route('/forApproval').get(approver.approvalRequestList);

module.exports = router

