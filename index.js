const express = require("express");
require("dotenv").config();

const { getconnection } = require("./db/db-connection-mongo");
const cors = require("cors");

const app = express();
//const port = process.env.PORT;
const port = 4006;

//implementar cors
app.use(cors());

getconnection();

// parseo JSON
app.use(express.json());


app.use("/proyecto", require("./router/proyecto"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
