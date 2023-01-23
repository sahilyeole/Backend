const express = require("express");
const router = express.Router();
const {check} = require("express-validator")

const { login, signup, refreshToken, addToWatchlist, removeFromWatchlist} = require("../controller/users")
const findUser = require("../middleware/findUser")

const validation = [check("name","Name is required").not().isEmpty(),
check("email","Please include a valid email").isEmail(),
check("password","Please enter a password with 6 or more characters").isLength({min:6})]

router.route('/signup').post(validation,signup)
router.route('/login').post(login)
router.route('/refresh_token').post(refreshToken)
router.route('/add/:id').patch(findUser,addToWatchlist)
router.route('/remove/:id').patch(findUser,removeFromWatchlist)
module.exports = router;