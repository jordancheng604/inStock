const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
// CORS
const cors = require("cors");
app.use(cors());

// bodyparser
app.use(express.json());

const inventory_routes = require("./routes/inventory.js");
const warehouses_routes = require("./routes/warehouse.js");
// inventory route
app.use("/inventory", inventory_routes);
// warehouse route
app.use("/warehouses", warehouses_routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
