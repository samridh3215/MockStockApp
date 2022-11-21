const router = require("express").Router();
const { response } = require("express");
const { User } = require("../models/user");


router.get("/:email/:item/:price", async(req, res)=>{
     const user = await User.findOne({email:req.params.email})
     const currentCash = user.totalCash
     const updatedCash = currentCash - parseInt(req.params.price)
     if(!currentCash<parseInt(req.params.price)){
          const updatedUser = await User.updateOne({email:req.params.email}, {$push: { holdings: req.params.item}, $set:{totalCash: updatedCash}})
          console.log(updatedUser)
     }
     else{
          return;
     }
     
}) 
  

module.exports = router;