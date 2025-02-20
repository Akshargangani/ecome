const express = require('express')

const router = express.Router()

const userSignUpController = require('../controller/user/userSignUp.jsx')
const userSignInController = require('../controller/user/userSignIn.jsx')
const userDetailsController = require('../controller/user/userDetails.jsx')
const authToken = require('../middleware/authToken.jsx')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)

module.exports = router

