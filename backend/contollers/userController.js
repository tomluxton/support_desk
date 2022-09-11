const asyncHandler = require('express-async-handler')

// @desc    register a new user
// @ route  /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res) => {

    const{name, email, password} = req.body
    //validation
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please invlude all fields')
    }

    //console.log(req.body)
    res.send('Register Route')
})

// @desc    Login user
// @ route  /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req, res) => {
    res.send('Login Route')
})

module.exports = {
    registerUser,
    loginUser,
}