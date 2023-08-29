const express = require('express')
const router = express.Router()
const admin = require('../controller/adminController')

router.route('/stats').get(admin.queryResults);
router.route('/calendar').get(admin.calendarArrayObj);

module.exports = router