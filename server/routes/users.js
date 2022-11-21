const router = require("express").Router();
const { User, validate, getUsers } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	
	const salt = await bcrypt.genSalt(Number(process.env.SALT));
	const hashPassword = await bcrypt.hash(req.body.password, salt);
			const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });
	let u = await new User({ name:req.body.name, email:req.body.email, holdings:[], totalCash:1000, password: hashPassword })
	u.save((err)=>{
	if(err) console.log(err)
	console.log(u.name+" registered wtih "+u.totalCash )
	})

	// try {
	// 	const { error } = validate(req.body);
	// 	if (error)
	// 		return res.status(400).send({ message: error.details[0].message });

	// 	const user = await User.findOne({ email: req.body.email });
	// 	if (user)
	// 		return res
	// 			.status(409)
	// 			.send({ message: "User with given email already Exist!" });

	// 	const salt = await bcrypt.genSalt(Number(process.env.SALT));
	// 	const hashPassword = await bcrypt.hash(req.body.password, salt);

	// 	await new User({ ...req.body, password: hashPassword }).save();
	// 	res.status(201).send({ message: "User created successfully" });
	// } catch (error) {
	// 	res.status(500).send({ message: "Internal Server Error" });
	// }
});

module.exports = router;