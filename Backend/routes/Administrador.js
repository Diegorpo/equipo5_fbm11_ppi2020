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
    const {id}= req.params;
    mysqlConnection.query('SELECT * FROM tblusuario WHERE id_usuario =?',[id],
    (err,rows,fields)=>{
     if(!err){
         res.json(rows[0]);
         }else{
             console.log(err);
            }
        });
    });
    

module.exports = router;