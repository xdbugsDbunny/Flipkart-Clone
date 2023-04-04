import Connection from './database/db.js';
import express from 'express';
import DefaultData from './default.js'
import router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
//cors- cross origin resource sharing- agar do different server se resource share nahi hote ttw usko use krne ke liye cors use krte hai
import dotenv from 'dotenv';
//Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
const app=express();
dotenv.config();// dotenv start 

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router)

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


Connection(USERNAME,PASSWORD);



app.listen(8000,()=>console.log("ALL GOOD!!!"))

DefaultData();
