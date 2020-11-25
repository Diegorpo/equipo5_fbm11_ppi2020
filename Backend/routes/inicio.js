const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');
router.get('/inicio',(req,res)=>{
    mysqlConnection.query('SELECT * from tblinicio ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    const {id}= req.params;
    mysqlConnection.query('SELECT * FROM tblinicio WHERE id_inicio =?',[id],
    (err,rows,fields)=>{
     if(!err){
         res.json(rows[0]);
         }else{
             console.log(err);
            }
        });
    });
    

module.exports = router;