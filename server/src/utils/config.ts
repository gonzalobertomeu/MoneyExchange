'use strict'

import * as dotenv from 'dotenv';

let config:Config;

export function getConfig(environment:any){
    if(!config){
        dotenv.config();

        config = {
            port: process.env.PORT || "3000"
        }
    }
}

export interface Config{
    port: String;
}