const User = require("../models/User")
module.exports = async function findUser(req,res,next){
  let user
  try {
    user = await User.findById(req.params.id)
    if(user == null){
      return res.status(404).json({message: "Cannot find user"})
    }
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
res.user  = user  
next()
}