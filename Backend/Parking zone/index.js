const express= require('express');
const app = express();
const routes= require('./routes/routes');
const parqueadero = requiere('./routes/parqueaderos');
const carros = requiere('./routes/carros');
//ajustes
app.set('port',3000)


// Middleware
app.use(express.json());


// ajustess
app.use('/api',routes);
app.use('/api/parqueadero', parqueadero);
app.use('/api/carros', carros);



app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
})
