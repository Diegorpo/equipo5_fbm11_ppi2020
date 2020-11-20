const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({

host:'bygcafnqdoscsmxpbggx-mysql.services.clever-cloud.com',
user:'umsa2inyfxfxfh1x',
password:'V0qQlv2BPyoNUOsIG4pX',
database:'bygcafnqdoscsmxpbggx',
multipleStatements:true
});

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{

    console.log('Base de datos conectada');
}

})
module.exports = mysqlConnection;