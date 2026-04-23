const StaffContactModel = require('./StaffContactModel');

//GET
module.exports.getStaffContactForm = async(req, res) => {
    const userForm = await StaffContactModel.find();
    res.send(userForm)
}

//SAVE
module.exports.saveStaffContactForm = async (req, res) => {
    const { firstName, lastName, email, message } = req.body
    StaffContactModel.create({ firstName, lastName, email, message })
    .then((data) => {console.log ('Contact staff member form added!!!')
    res.send(data)
  })
}