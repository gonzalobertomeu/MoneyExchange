import { Response } from "express";

'use strict'

export interface ValidationErrors{
    path: string;
    message: string;
}

export function handle(res: Response, error: any){
    if(typeof error.lenght === 'number'){
        res.status(400).json(error);
    }
    
    if(error.code){
        res.status(error.code)
    }else{
        res.status(500);
    }
    res.json(error);
}