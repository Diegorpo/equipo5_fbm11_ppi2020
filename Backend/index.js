const express = require('express');
const app = express();

const inicio = require('./routes/inicio');
const Administrador = require('./routes/Administrador');
const comentario = require('./routes/comentarioS');
const parqueadero = require('./routes/parqueadero');

app.set('port', 4000);

app.use(express.json());

//rutas
app.use('/api/inicio', inicio);
app.use('/api/Administrador', Administrador);
app.use('/api/comentario', comentario);
app.use('/api/parqueadero', parqueadero);

app.listen(app.get('port'), ()=>{
 console.log(`Server on port ${app.get('port')}`);
})