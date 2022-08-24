const bcrypt = require('bcrypt');
const saltRounds = 10;
var bd = require("../../bd/mysql")

const controller = {}
 
//Middleware para peticion a la base de datos
const query = async(sql,objeto) => {
    const connection = await bd.getConnection();
    if(objeto){
        const resultObj = await connection.query(sql,objeto)
        return resultObj;
    }else{
        const result = await connection.query(sql)
        return result;
    }
}

//Metodo Get All
controller.list = async(req,res)=>{
    try {
        const sql = "SELECT * FROM usuarios";
        const results = await query(sql);

        if(results.length == 0){
            throw new Error("No hay usuarios cargados");
        }else{
            res.send(results);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
 
}

//Metodo get Single
controller.user = async(req,res)=>{
    try {     
        let id = req.params.id;
        const sql = `SELECT * FROM usuarios WHERE user_id = ${id}`
        const results = await query(sql)
                       
        if(results.length == 0){
            throw new Error("No existe el usuario");
        }else{
            res.json(results)
        }

    } catch (error) {
        res.status(404).send(error.message);
    }
}

//Metodo delete
controller.delete = async(req,res)=>{

    try {
        let id = req.params.id;
        const sql = `SELECT * FROM usuarios WHERE user_id = ${id}`
        const results = await query(sql)
        if(results.length != 0){
            await query(`DELETE FROM usuarios WHERE user_id = ${id}`);
            res.send("El usuario se elimino correctamente");
        }else{
            throw new Error("El usuario no existe");
        }
    } catch (error) {
        res.status(400).send(error.message);
    }

}

//Metodo Post
controller.post = async(req,res)=>{
    try {     
        const sql = `SELECT * FROM usuarios WHERE (phone = '${req.body.phone}' OR email = '${req.body.email}' 
        OR username = '${req.body.username}')`;
        const result = await query(sql);
        
                if(result.length === 0){
                    await query("INSERT INTO usuarios SET ?",[req.body])
                    res.send("Se cargo correctamente");
                }else{
                    if(result[0].phone == req.body.phone ){
                        throw new Error("El telefono ya existe");
                    }
                    if(result[0].email === req.body.email ){
                        throw new Error("El mail ya existe");
                    }
                    if(result[0].username == req.body.username){
                        throw new Error("El nombre de usuario ya existe");
                    }
                }
    } catch (error) {
        res.status(500).send(error.message);
    }
}


//Metodo Update
controller.update = async(req,res)=>{
    try { 
        var id = req.params.id;
        const sql = `SELECT * FROM usuarios WHERE user_id = '${id}'`;
            const result = await query(sql);
        
                if(result.length > 0){
                   const results = await query(`SELECT * FROM usuarios WHERE (phone = '${req.body.phone}' OR email = '${req.body.email}' 
                    OR username = '${req.body.username}') AND user_id != '${id}'`)
                            if(results.length > 0){
                                
                                if(results[0].phone == req.body.phone ){
                                    throw new Error("El telefono ya existe");
                                }
                                if(results[0].email === req.body.email ){
                                    throw new Error("El mail ya existe");
                                }
                                if(results[0].username == req.body.username){
                                    throw new Error("El nombre de usuario ya existe");
                                }
                                    
                                
                            }else{
                                let sql = `UPDATE usuarios SET ? WHERE user_id = '${id}'`
                                const updt = await query(sql,[req.body])
                                        res.send(updt);
                                
                            }
                      
                    
                }else{
                    throw new Error("No existe el usuario");
                }
    } catch (error) {
           
        res.status(500).send(error.message)
    }
       
}


module.exports = controller;