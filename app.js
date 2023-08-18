require("dotenv").config();
const Server = require("./src/services/Server");

const server = new Server();

server.listen();
