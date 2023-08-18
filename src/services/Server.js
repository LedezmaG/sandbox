const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("../database/connection");
// ROUTES
const fileRoute = require("../routes/fileRoute");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8081;
        this.middleware();
        this.routes();
        this.dbConect();
    }

    async dbConect() {
        try {
            await sequelize.sync();
            // connection.connect()
            // connection.query('SELECT 1 + 1 AS solution', (err) => {
            //     if (err) throw err
            //     console.log("Database online")
            // })
            
        } catch (error) {
            console.log(error)
        }
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use("/files", fileRoute);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server online, PORT running: " + this.port);
        });
    }
}
module.exports = Server;
