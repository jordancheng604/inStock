const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const inventory_routes = require("./routes/inventory.js");
const warehouses_routes = require("./routes/warehouse.js");

// bodyparser
app.use(express.json());
// CORS
app.use(cors());

app.use(express.urlencoded({extended: false}));

app.get('/', (_req,res,next)=>{
    res.send("Hi there and Welcome to inStock, a project that involved a team of four people. You are viewing this from Jordan's version (www.jordancheng.com)")
    next()
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// inventory route
app.use("/inventory", inventory_routes);
// warehouse route
app.use("/warehouses", warehouses_routes);
