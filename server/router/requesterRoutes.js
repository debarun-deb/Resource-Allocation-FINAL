const express = require('express')
const router = express.Router()
const formControl = require('../controller/formController')
const {verify} = require('../middleware/verify')



router.route('/home').post(formControl.forms)
router.route('/requesterForms').get(verify,formControl.getRequesterForms)
// router.route('/getallBookings').get(formControl.getAllForms)
router.route('/home/:id').delete(formControl.deleteForm)
// router.route('/confirmed').get(formControl.updateCardStatus)
router.route('/updateStatus').patch(formControl.updateFormStatus) // not working need to be tested


module.exports = router