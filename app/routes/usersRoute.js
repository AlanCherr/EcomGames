const express = require("express");
const router = express.Router();
const bd = require("../bd/mysql")

router.get("/",(req,res)=>{
    bd.query("SELECT * FROM usuarios", (err, results)=>{
        try {
            if(results.length == 0){
                throw new Error("No hay usuarios cargados");
            }else{
                res.send(results);
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
        })
     
})

router.get("/:id",(req,res)=>{
    let id = req.params.id;
        
        bd.query("SELECT * FROM usuarios WHERE user_id = ?",id, (error, results)=>{
            try {     
                if(results.length == 0){
                    throw new Error("No existe el usuario");
                }else{
                    res.json(results)
                }
            } catch (error) {
                res.send(error.message);
            }
        });
    
})

router.delete("/:id",(req,res)=>{
    let id = req.params.id;
    bd.query("SELECT * FROM usuarios WHERE user_id = ?", id,(err, results)=>{
        try {
            if (err)
            throw error;
            if(results.length != 0){
                bd.query("DELETE FROM usuarios WHERE user_id = ?", id);
                res.send("El usuario se elimino correctamente");
            }else{
                throw new Error("El usuario no existe");
            }

        } catch (error) {
            res.status(400).send(error.message);
        }
        })
})

router.post("/",(req,res)=>{
    bd.query("INSERT INTO usuarios SET ?",[req.body], (err, results)=>{
        try {
            if(err)
            throw error;
            res.json(results);
        } catch (error) {
            res.status(500).send(error)
        }
        })
})

router.put("/:id", (req,res)=>{
    var id = req.params.id;
    bd.query("SELECT * FROM usuarios WHERE user_id = ?", id, (err, result)=>{
        try {
            if(result.length > 0){
                bd.query(`SELECT * FROM usuarios WHERE (phone = '${req.body.phone}' OR email = '${req.body.email}' 
                OR username = '${req.body.username}') AND user_id != '${id}'`, (err, results)=>{
                    try {
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
                            bd.query(sql,[req.body], (err, results)=>{
                                try {
                                    res.send(results);
                                } catch (error) {
                                    res.status(500).send(error.message)
                                }
                            })
                        }
                            
                    } catch (error) {
                        res.status(500).send(error.message)
                    }
                })
            }else{
                throw new Error("No existe el usuario");
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
        })
       
})

module.exports = router;