const express = require("express");
const router = express.Router();
const gameController = require("./controllers/gameController");

router.get("/", gameController.list);

router.get("/:id", gameController.game);

router.delete("/:id", gameController.delete)

router.post("/",gameController.post);

router.put("/:id",gameController.update)
module.exports = router;