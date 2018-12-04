'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
let config;
function getConfig(environment) {
    if (!config) {
        dotenv.config();
        config = {
            port: process.env.PORT || "3000",
            secret: process.env.SECRET || "mysecret"
        };
    }
    return config;
}
exports.getConfig = getConfig;
