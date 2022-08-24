var bd = require("../../bd/mysql")

const controller = {}

const query = async(sql,objeto) => {
    console.log(sql, objeto);
    const connection = await bd.getConnection();
    if(objeto){
        const resultObj = await connection.query(sql,objeto)
        return resultObj;
    }else{
        const result = await connection.query(sql)
        return result;
    }
}


controller.list = async(req,res)=>{
    try {
        const sql = "SELECT * FROM juegos";
        const results = await query(sql)
        
        if(results.length > 0){
            res.send(results);
        }else{
            throw new Error("No hay juegos cargados");
        }
    } catch (error) {
        if(error === "No hay juegos cargados" ){
            res.status(404).send(error.message);
        }else{
            res.status(500).send(error.message);
        }
    }
     
}

controller.game = async(req,res)=>{
    try {
        let id = req.params.id;
        const sql = "SELECT * FROM juegos WHERE game_id = ?"
        const results = await query(sql, id);
          
                if (results.length == 0)
                    throw new Error("El juego no existe");
                else
                    res.send(results);
    } catch (error) {
        res.status(500).send(error.message);
    }
        
       
}


controller.delete = async(req, res)=>{
    try {
        let id = req.params.id;
        const sql = "SELECT * from juegos WHERE game_id = ?"
        const results = await query(sql,id);
        if(results.length != 0){
            try {
                await query("DELETE FROM juegos WHERE game_id = ?",id);
                res.send("Se borro el juego");
            } catch (error) {
            res.send(error.message).status(500);
            }
        }else{
            throw new Error("El juego no existe")
        }
    } catch (error) {
        if(error.message === "El juego no existe"){
            res.status(404).send(error.message)
        }else{
            res.status(500).send(error.message);
        }
    }
        
        
}


controller.post = async(req,res)=>{
    try {
        const results = await query("SELECT * FROM juegos WHERE title = ?",req.body.title);
        if(results.length == 0){
            const insert = await query("INSERT INTO juegos SET ?", [req.body]);
                res.send("El juego se cargo correctamente");
        }else{
            throw new Error("Ya existe un juego con ese titulo.")
        }
        
    } catch (error) {
        res.send(error.message).status(500);
    }
        
    
}


controller.update =  async(req,res)=>{
    try {
        var id = req.params.id;
        const result = await query("SELECT * FROM juegos WHERE game_id = ?",id);
            if(result.length > 0){
            try {
                await query(`UPDATE juegos SET ? WHERE game_id = '${id}'`, [req.body]);
                res.send("El juego se actualizo correctamente");
            } catch (error) {
                res.send(error.message).status(500);
            }
            }else{
                throw new Error("No existe el juego");
            }
                
    } catch (error) {             
        if(error.message === "No existe el juego")
        res.status(404).send(error.message)
        else
            res.status(500).send(error.message)
        }
}



module.exports = controller;