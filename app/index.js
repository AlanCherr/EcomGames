const express = require("express");
const app = express();
const users = require("./routes/usersRoute");
const games = require("./routes/gamesRoute");
const port = process.env.PORT || 8080;

app.use("/users",users);
app.use("/games",games);
app.listen(port, ()=>{
    try {
        console.log("Server on port: "+ port);
    } catch (err) {
        console.log(err);
    }
})