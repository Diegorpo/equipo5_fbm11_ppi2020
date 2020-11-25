const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');
router.get('/comentario',(req,res)=>{
    mysqlConnection.query('SELECT * from tblcomentario ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin
    router.get('/buscar/:id',(req,res)=>{
        const {id}= req.params;
        mysqlConnection.query('SELECT * FROM tblcomentario WHERE id_comentario =?',[id],
        (err,rows,fields)=>{
         if(!err){
             res.json(rows[0]);
             }else{
                 console.log(err);
                }
            });
        });
      












module.exports = router;
