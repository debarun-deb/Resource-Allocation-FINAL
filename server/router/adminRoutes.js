const express = require('express')
const router = express.Router()
const admin = require('../controller/adminController')
const {verify} = require('../middleware/verify')

router.route('/stats').get(admin.queryResults);
router.route('/calendar').get(verify,admin.calendarArrayObj);

module.exports = router