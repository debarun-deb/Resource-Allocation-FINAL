const express = require('express')
const router = express.Router()
const admin = require('../controller/adminController')
const {verify} = require('../middleware/verify')

router.route('/stats').get(admin.queryResults);
router.route('/calendar').get(verify,admin.calendarArrayObj);

router.route('/startDates').post(admin.getStartDates);
router.route('/getResources').post(admin.getAllRequests);



module.exports = router