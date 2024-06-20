import mysql from "mysql"
import dotenv from 'dotenv';

dotenv.config();

//database connection
 let con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: "",
    database: process.env.DB_NAME
 });

con.connect(function(err){
   if(err){
      console.log("connection error");
   }
   else{
      console.log("connected");
   }
})

export default con;