// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017');
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded");
// })

// const Schema  = mongoose.Schema;

// const userSchema = new Schema({
//      name: String,
//      email: String,
//      password: String,
//      holdings : Object,
//      totalCash : Number
//    });
// const User = mongoose.model("User", userSchema);

const {MongoClient} = require("mongodb");
// async function main(){
//      /**
//       * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//       * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//       */
//      const uri = "mongodb://localhost:27017";

//      const client = new MongoClient(uri);
//          // Connect to the MongoDB cluster
//          let conn = await client.connect();
         
//          const db = conn.db("users");
//          const collection = db.collection("users");
//          let res = await collection.find({name:"Admin" },{password:"admin123"}).toArray()
//           console.log(res)
     
//  }

 async function validateUserDetails(mail, pass){

     const uri = "mongodb://localhost:27017";
     const client = new MongoClient(uri);
     let conn = await client.connect();
     const db = conn.db("users");
     const collection = db.collection("users");
     let res = await collection.find({email:mail}, {password:pass}).toArray()
     console.log(res)
     if(res==[]){
          return -1;
     }
     else return 1;
     
 }
 console.log(validateUserDetails("samridh", "admin123"))

function handleLogin(){
     const email = $("#form3Example1c").val()
     const pass= $("form3Example3c").val()
     // let res = validateUserDetails(email, pass)
     // console.log(res)
     // if(res) window.open("http://localhost:3000");
     // else alert("wrong credentials")
     // alert($("#form3Example1c").val()+" invalid  password");
}

function handleRegister(){
     alert($("#form3Example3c").val()+" registered succesfully, you can log in now");
}


