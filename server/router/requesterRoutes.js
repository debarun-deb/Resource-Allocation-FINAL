const express = require("express");
const router = express.Router();
const formControl = require("../controller/formController");
const { verify } = require("../middleware/verify");

router.route("/home").post(formControl.forms);
router.route("/requesterForms").get(verify, formControl.getRequesterForms);


router.route('/home').post(formControl.forms)
router.route('/requesterForms').get(verify,formControl.getRequesterForms)

// router.route('/calendar').get(formControl.calendarArrayObj);

router.route('/home/:id').delete(formControl.deleteForm)
router.route('/updateStatus').patch(formControl.updateFormStatus) 

module.exports = router;
