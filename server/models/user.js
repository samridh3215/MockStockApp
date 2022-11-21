const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
     name:{type:String, required:true},
     email: {type:String, required:true},
     password:{type:String, required:true},
     holdings:{type:Object},
     totalCash: {type:Number}
});

userSchema.methods.generateAuthToken = function (){
     const token = jwt.sign({_id:this._id}, `${process.env.JWTPRIVATE}`, {expiresIn:"7d"})
     return token
}

const User = mongoose.model("user", userSchema)

async function getUsers(User, object){
     // await new User({name:"test1", password:"test1", email:"test1@test.com"}).save()
     console.log(await User.find(object))
}
// getUsers(User, {})

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("name"),
		email: Joi.string().email().required().label("email"),
		password: passwordComplexity().required().label("password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate, getUsers };