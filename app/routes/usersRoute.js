const express = require("express");
const router = express.Router();
const bd = require("../bd/mysql")

router.get("/",(req,res)=>{
    try {
        bd.query("SELECT * FROM usuarios", (err, results)=>{
            if(err)
            throw error;
            res.json(results);
        })
     
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;