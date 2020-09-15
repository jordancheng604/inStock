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


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// inventory route
app.use("/inventory", inventory_routes);
// warehouse route
app.use("/warehouses", warehouses_routes);
