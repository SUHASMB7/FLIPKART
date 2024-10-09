import express from 'express';
import {MongoUrl} from '../server/configdb.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import defaultData from './default.js';

// const express = require('express');

const app = express();


//dotenv.config(USERNAME, PASSWORD);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

app.get('/api/ss',(req,res)=>{

    res.status(200).send(" your are on homepage")
})


//mongoose
// const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect(MongoUrl)
    .then(() => {
        console.log('Connected to MongoDB successfully');
        
    app.listen(5000,()=>{
    console.log("app is running on 6000 port")
})
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });


defaultData();