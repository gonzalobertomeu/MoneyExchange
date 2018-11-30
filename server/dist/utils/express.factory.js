'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bp = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes");
const chalk = require('chalk');
function init() {
    let server = express();
    server.use(bp.urlencoded({ extended: false }));
    server.use(bp.json());
    server.use(morgan((tokens, req, res) => {
        const config = [];
        config.push(chalk.black.bgGreen(" [" + tokens.method(req, res) + "] "));
        config.push(chalk.black.bgMagenta(" URL:" + tokens.url(req, res) + " "));
        config.push(chalk.black.bgCyan(" Status:" + tokens.status(req, res) + " "));
        config.push(chalk.cyan(" Response-Time: " + tokens['response-time'](req, res) + " ms"));
        return config.join('');
    }));
    server.use(helmet());
    server.use(cors());
    routes.init(server);
    return server;
}
exports.init = init;
