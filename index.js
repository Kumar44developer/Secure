import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";


const app = express();
const port = 3000;
const saltRounds = 10;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));





































