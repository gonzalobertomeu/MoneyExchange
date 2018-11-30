'use strict'

import * as express from 'express';
import * as bp from 'body-parser';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';


import * as routes from "./routes";
const chalk = require('chalk');

export function init(){

    let server = express();
    
    server.use(bp.urlencoded({extended:false}));
    server.use(bp.json());

    server.use(morgan((tokens,req,res)=>{
        const config: String[] = [];
        config.push(chalk.black.bgGreen(" ["+tokens.method(req,res)+"] "));
        config.push(chalk.black.bgMagenta(" URL:" +tokens.url(req,res)+" "));
        config.push(chalk.black.bgCyan(" Status:" + tokens.status(req,res)+" "));
        config.push(chalk.cyan(" Response-Time: " +tokens['response-time'](req,res) + " ms"));

        return config.join('');
    }));

    server.use(helmet());
    server.use(cors());

    routes.init(server);
    
    return server;
}