const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//necesito consultar todass las filas de la tabla comentarioSugerencias
router.get('/', (req, res)=>{
     mysqlConnection.query('SELECT * FROM comentarioSugerencia', (err, rows, fields)=>{
         if(!err) {
             res.json(rows);
         }else {
             console.log(err);
         }
     });
});

//Servicio para registrar un nuevo comentario o sugerencia
router.post('/comentarioSugerencia/nuevo', (req, res)=>{
  const { comentarioSugerencia } = req.body;

  let comentarioSugerencia2 = [ comentarioSugerencia ];

  let nuevoComentarioSugerencia = `INSERT INTO comentarioSugerencia(comentarioSugerencia) VALUES(?)`;
  mysqlConnection.query(nuevoComentarioSugerencia, comentarioSugerencia2, (err, results, fields)=>{
      if(err){
          return console.error(err.message);
      } else{
          res.json({message: `Comentario registrado`})
      }
  });
});

//Actualización de un comentario o sugerencia
router.put('/comentarioSugerencia/actualizar', (req, res)=>{
    const {comentarioSugerencia} = req.body;
    const { actualizar } = req.params;
    mysqlConnection.query(`UPDATE comentarioSugerencia SET comentarioSugerencia = ? WHERE actualizar = ?`, [comentarioSugerencia, actualizar], (err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se ha actualizado el comentario'});
        }else {
            console.log(err);
        }
    });
})

//Borrar un comentario o sugerencia de la tabla
router.delete('/comentarioSugerencia/borrar',(req,res)=>{
    const { borrar } = req.params;
    mysqlConnection.query(`DELETE FROM comentarioSugerencia WHERE borrar = ?`, 
             [borrar],(err, rows, fields)=>{
        if(!err) {
            res.json({status: 'Se ha eliminado el comentario'});
        }else {
            console.log(err);
        }
    });
});

module.exports = router;




