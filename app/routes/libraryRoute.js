const express = require("express");
const router = express.Router();
const bd = require("../bd/mysql")


router.get("/", (req, res) => {
        bd.query("SELECT * FROM biblioteca",(err,results)=>{
            try {
                if(results.length == 0){
                    throw new Error("No hay registros");
                }else{
                    res.send(results);
                }
            } catch (error) {
                res.status(400).send(error.message);
            }
        });
})

router.get("/:user_id", (req, res) => {
    var user_id = req.params.user_id;
    bd.query("SELECT * FROM biblioteca WHERE user_id = ?",user_id,(err,results)=>{
        try {
            if(results.length == 0){
                throw new Error("No hay registros para el usuario");
            }else{
                res.send(results);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    });
})

router.delete("/:user_id/:game_id", (req,res)=>{
    var user_id = req.params.user_id;
    var game_id = req.params.game_id;
    bd.query(`SELECT * FROM biblioteca WHERE user_id =  '${user_id}' AND game_id =  '${game_id}'`, (err,results)=>{
        try {
            if(results.length != 0){
                bd.query(`DELETE FROM biblioteca WHERE user_id =  '${user_id}' AND game_id = '${game_id}'`)
                res.send("El registro se elimino correctamente de la biblioteca");
            }else{
                throw new Error("No existe el registro en la biblioteca");
            }
        } catch (error) {
            res.status(404).send(error.message);
        }
    })
    
})

router.post("/", (req,res)=>{
    var user = req.body.user_id
    var game = req.body.game_id
    bd.query(`SELECT * FROM biblioteca WHERE user_id = '${user}' AND game_id = '${game}'`, (err,results)=>{
        try {
            if(results.length == 0){
                bd.query(`SELECT * FROM usuarios WHERE user_id = '${user}'`,(err, results)=>{
                    try {
          
                        if(results.length != 0){
                            bd.query(`SELECT * FROM juegos WHERE game_id = '${game}'`,(err, results)=>{
                                try {     
                                    if(results.length != 0){
                                        bd.query(`INSERT INTO biblioteca SET ?`,[req.body],(err,results)=>{
                                            try {
                                                if(err){
                                                    throw new Error(err);
                                                }else{
                                                    res.send("El registro se cargo correctamente");
                                                }
                                            } catch (error) {
                                                res.send(error.message).status(500);
                                            }
                                        })
                                    }else{
                                        throw new Error("El juego no existe")
                                    }
                                } catch (error) {
                                    res.send(error.message).status(404);
                                }
                            })
                        }else{
                            throw new Error("El usuario no existe");
                        }

                    } catch (error) {
                        res.send(error.message).status(404);
                    }
                })
            }else{
                throw new Error("Ya existe el registro en la base de datos");
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    })
})

module.exports = router;