const express = require('express')
const router = express.Router()
const admin = require('../controller/adminController')

router.route('/stats').get(admin.queryResults);

module.exports = router