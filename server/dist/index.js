'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("./utils/express.factory");
let server = express.init();
server.listen(3000, () => {
    console.log("Server's up");
});
