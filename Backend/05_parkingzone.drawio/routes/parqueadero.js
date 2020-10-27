const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');
router.get('/',(req,res)=>{
mysqlConnection.query('SELEC * FROM parqueadero',(err,rows,fields)=>{

     if (!err){
         res.json(rows);
     }else{
         console.log(err);
    }
    
});
});
router.get('/parqueadero/:id',(req,res)=>{
    const {id}= req.parans;
    mysqlConnection.query('SELEC * FROM parqueadero WHERE id =?',[id],
    (err,rows,fields)=>{
     if(!err){
         res.json(rows[0]);
         }else{
             console.log(err);
         }
    });
});
parqueadero.exports = router;