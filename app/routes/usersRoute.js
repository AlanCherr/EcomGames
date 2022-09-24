const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userController = require("./controllers/usersController");

//localhost:3000/users/
router.get("/",userController.list)


router.get("/:id",userController.user)

router.delete("/:id",userController.delete)

router.post("/",userController.post)

router.put("/:id", userController.update);

module.exports = router;