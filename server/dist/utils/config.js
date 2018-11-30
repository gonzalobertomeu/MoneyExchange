'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
let config;
function getConfig(environment) {
    if (!config) {
        dotenv.config();
        config = {
            port: process.env.PORT || "3000"
        };
    }
}
exports.getConfig = getConfig;
