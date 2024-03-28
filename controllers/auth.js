import express from "express";
import { db } from "../connect.js";
import bcrypt from "bcrypt";


export const auth = (req, res) => {
    res.send("user needs authentication")}

   export const register = (req,res) => {
        //check if user exists
         const searchQuery = "SELECT * FROM users WHERE username = ?";
         db.query(searchQuery, [req.body.username], (err,data) => {
            //sends an error in json format
            if(err) return res.status(500).json(err)
            if(data.length) return res.status(409).json("user already exists!")

        //create a new user 
        //hash password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const insertQuery = "INSERT INTO users (username,email,password,name) VALUE(?)";
        const values = [req.body.username,req.body.email,hashedPassword,req.body.name];
        db.query(insertQuery, [values], (err,data) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send("User created successfully")

        })
         })
        
    }

    