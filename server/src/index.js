const express = require("express");
const server = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const loginRoute = require("./routes/loginRoute");

const port = 8080;
const host = '159.65.96.86'

server.use(cors())
server.use(bodyParser.json());
server.use(cookieParser());
server.use(morgan("dev"));

server.use(loginRoute)


server.listen(port, host, () => {
    console.log(`El servidor está escuchando en http://${host}:${port}`);
  })





