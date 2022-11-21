require('dotenv').config()
const express = require("express");
const app = express()
const cors = require("cors");
const connection = require("./db")
const  userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const updateRoute = require('./routes/update')
const buyRoute =require('./routes/buy')
const sellRoute = require('./routes/sell')
connection()

app.use(express.json())
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/update", updateRoute)
app.use("/api/buy", buyRoute)
app.use("/api/sell", sellRoute)


const port = process.env.PORT||8080;
app.listen(port, ()=>console.log(`listening on port ${port}`))