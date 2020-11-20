const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');
router.get('/',(req,res)=>{
mysqlConnection.query('SELECT * FROM tblparqueadero',(err,rows,fields)=>{

     if (!err){
         res.json(rows);
     }else{
         console.log(err);
    }
    
});
});
router.get('/buscar/:id',(req,res)=>{
    const {id}= req.params;
    mysqlConnection.query('SELECT * FROM tblparqueadero WHERE id_parqueadero =?',[id],
    (err,rows,fields)=>{
     if(!err){
         res.json(rows[0]);
         }else{
             console.log(err);
         }
    });
});
module.exports = router;