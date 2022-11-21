const router = require("express").Router();
const { response } = require("express");
const { User } = require("../models/user");


router.get("/:email/:item/:price", async(req, res)=>{
     const user = await User.findOne({email:req.params.email})
     const holds = user.holdings
     const currentCash = user.totalCash
     const updatedCash = currentCash + parseInt(req.params.price)
     if(holds.includes(req.params.item)){
          const updatedUser = await User.updateOne({email:req.params.email}, {$pull: { holdings: req.params.item}, $set:{totalCash: updatedCash}})
     }
     
}) 
  

module.exports = router;