var mysql = require("mysql");
var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'ecomgames',
    port: 3306
})

conexion.connect((error)=>{ 
        if(error){
           throw error;
        }else{
           console.log('Conexion correcta.');
        }
})


module.exports = conexion;
