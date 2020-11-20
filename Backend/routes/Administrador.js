const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');
router.get('/Administrador',(req,res)=>{
    mysqlConnection.query('SELECT * from tblusuario ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    mysqlConnection.query('SELECT * from tblinicio ',(err,rows,fiels)=>{
        if(!err){
           res.json(rows); 
        }else{
        console.log(err);
        }});
    })// fin












module.exports = router;