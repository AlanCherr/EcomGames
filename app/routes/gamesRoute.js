const express = require("express");
const router = express.Router();
const bd = require("../bd/mysql")

router.get("/",(req,res)=>{
    bd.query("SELECT * FROM juegos", (err, results)=>{
        try {
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
        })
     
})

router.get("/:id", (req,res)=>{
    let id = req.params.id;
    bd.query("SELECT * FROM juegos WHERE game_id = ?", id, (err, results)=>{
        try {
            if (results.length == 0)
                throw new Error("El juego no existe");
            else
                res.send(results);
        } catch (error) {
            res.status(500).send(error.message);
        }
        })
})

router.delete("/:id", (req, res)=>{
    let id = req.params.id;
    bd.query("SELECT * from juegos WHERE game_id = ?",id,(err,results)=>{
            try {
            if(results.length != 0){
                bd.query("DELETE FROM juegos WHERE game_id = ?", id,(err, results)=>{
                if(err)
                    throw new Error(err)
                else
                    res.send("Se borro el juego");
                });
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
        })
})

router.post("/",(req,res)=>{
    bd.query("SELECT * FROM juegos WHERE title = ?", req.body.title,(err, results)=>{
        try {
            if(results.length == 0){
                bd.query("INSERT INTO juegos SET ?",[req.body], (error, results)=>{
                    try {
                        if(error){
                            throw new Error(error)
                        }
                        else{
                            res.send("El juego se cargo correctamente");
                        }
                    } catch (error) {
                        res.status(500).send(error.message)
                    }
                })
            }else{
                throw new Error("Ya existe un juego con ese titulo.")
            }
        } catch (error) {
            res.send(error.message).status(500);
        }
    })
})

router.put("/:id", (req,res)=>{
    try {
        var id = req.params.id;
        bd.query("SELECT * FROM juegos WHERE game_id = ?", id, (err, result)=>{
            try {
                if(err){
                    throw new Error(err);
                }
                if(result.length > 0){
                        
                        // let sql = ;
                        bd.query(`UPDATE juegos SET ? WHERE game_id = '${id}'`,[req.body], (err, results)=>{
                            res.send("El juego se actualizo correctamente");
                        })
                    
                }else{
                    throw new Error("No existe el juego");
                }
                
            } catch (error) {
                if(error.message === "No existe el juego")
                    res.status(404).send(error.message)
                else
                    res.status(500).send(error.message)
            }
        }) 
    } catch (error) {
            res.status(500).send(error.message)
    }
})
module.exports = router;