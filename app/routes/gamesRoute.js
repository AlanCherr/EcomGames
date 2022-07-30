const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.json({mensaje: "Juegos funcionando"});
})

module.exports = router;