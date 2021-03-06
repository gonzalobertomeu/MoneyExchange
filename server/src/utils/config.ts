'use strict'

import * as dotenv from 'dotenv';

let config:Config;

export function getConfig(environment:any){
    if(!config){
        dotenv.config();

        config = {
            port: process.env.PORT || "3000",
            secret: process.env.SECRET || "mysecret",
            urlPrice: process.env.PRICE_URL || "http://api.estadisticasbcra.com",
            tokenPrice: process.env.PRICE_TOKEN || ""
        }
    }

    return config;
}

export interface Config{
    port: string;
    secret: string;
    urlPrice: string;
    tokenPrice: string;
}