const { Router } = require('express');
const router = Router();
const { getStaffContactForm } = require('./StaffContactController')

router.get('/', getStaffContactForm)


module.exports = router;