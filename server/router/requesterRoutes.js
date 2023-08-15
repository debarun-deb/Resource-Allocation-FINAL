const express = require('express')
const router = express.Router()
const formControl = require('../controller/formController')



router.route('/home').post(formControl.forms)
router.route('/getallBookings').get(formControl.getAllForms)
router.route('/home/:id').delete(formControl.deleteForm)
// router.route('/approver').post(formControl.sortForm)
router.route('/confirmed').get(formControl.updateCardStatus)
router.route('/updateStatus').patch(formControl.updateFormStatus) // not working need to be tested


module.exports = router