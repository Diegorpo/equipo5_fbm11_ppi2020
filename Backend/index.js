const express= require('express');
const app = express();
const Administrador= require('./routes/Administrador');
const parqueadero = require('./routes/parqueadero');
const comentario = require('./routes/comentario');
//const carros = requiere('./routes/Administrador');
//ajustes
const cors = require('cors');
// Uso de cors
app.use(cors({origin: '*'}));
//
app.set('port', process.env.PORT || 4000)


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
