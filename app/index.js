const express = require("express");
const users = require("./routes/usersRoute");
const games = require("./routes/gamesRoute");
const library = require("./routes/libraryRoute");
const bp = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;


//seteo body parser para toda la app desde aca
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.use("/users",users);
app.use("/games",games);
app.use("/library",library);
app.listen(port, ()=>{
    try {
        console.log("Server on port: "+ port);
    } catch (err) {
        console.log(err);
    }
})