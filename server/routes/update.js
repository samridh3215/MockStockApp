const router = require("express").Router();
const { response } = require("express");
const { User } = require("../models/user");


router.get("/:email", async(req, res)=>{
     const user = await User.findOne({email:req.params.email})
     res.send({data:user.toObject()})
     console.log(`${user.name} logged in`)
     console.log(user)
     
}) 
  

module.exports = router;