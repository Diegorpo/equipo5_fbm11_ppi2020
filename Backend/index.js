const express= require('express');
const app = express();
const Administrador= require('./routes/Administrador');
const parqueadero = require('./routes/parqueadero');
const comentario = require('./routes/comentario');
//const carros = requiere('./routes/Administrador');
//ajustes
app.set('port',4001)


// Middleware
app.use(express.json());


// ajustess
app.use('/api',Administrador);
app.use('/api/parqueadero', parqueadero);
app.use('/api/comentario', comentario);
//app.use('/api/carros', carros);



app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
})
