'use strict'

import { RestClient } from "typed-rest-client/RestClient";
import { getConfig } from "../utils/config";


export function getLastPrice(): Promise<Price>{
    const config = getConfig(process.env);

    console.log(config);
    
    const rest: RestClient = new RestClient('USD',config.urlPrice);

    return new Promise<Price>((resolve,reject)=>{
        rest.get<Price[]>("/usd",{
            additionalHeaders: {"Authorization": `Bearer ${config.tokenPrice}` } 
        }).then(data=>{
            if(data && data.result){
                let result = data.result;
                const lastItem = result.pop();
                resolve(lastItem);
            }
        }).catch(error=>{
            reject(error);
        });
    });
}

export function getAllPrices(): Promise<Price[]>{
    const config = getConfig(process.env);
    
    const rest: RestClient = new RestClient('USD',config.urlPrice);

    return new Promise<Price[]>((resolve,reject)=>{
        rest.get<Price[]>("/usd",{
            additionalHeaders: {"Authorization": `Bearer ${config.tokenPrice}` }
        }).then(data=>{
            if(data && data.result){
                resolve(data.result);
            }
        }).catch(error=>{
            reject(error);
        });
    });
}

export interface Price{
    d: string;
    v: number;
}