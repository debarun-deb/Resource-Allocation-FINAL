const express = require('express')
const router = express.Router()
const approver = require('../controller/ApproveController')
const {verify} = require('../middleware/verify')

router.route('/forApproval').get(verify,approver.approvalRequestList);

module.exports = router

