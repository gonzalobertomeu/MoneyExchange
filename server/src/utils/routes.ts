'use strict'

import { Router, Response, Request } from "express";
import * as user from "../user/service";
import { User,mockedUsers } from "../user/user";
import * as token from "../token/service";
import * as price from "../price/service";
import * as passport from 'passport';
import { handle } from "./error";

export function init(router:Router){
    router.route("/login").post(SignIn);
    router.route("/logout").get(passport.authenticate("jwt",{session:false}),logout);
    router.route("/current").get(passport.authenticate("jwt",{session:false}),current);
    router.route('/prices/usd').get(passport.authenticate("jwt",{session:false}),getLastPrice);
    router.route('/prices/usd/history').get(passport.authenticate("jwt",{session:false}),getAllPrices);
}



async function SignIn(req:Request,res:Response){
    console.log("Signing in");
    try {
        const userID = await user.login(req.body);
        const tokenString = await token.create(userID);
        res.status(200).json({
            token: tokenString,
        });

    } catch (error) {
        handle(res,error);
    }
}

async function logout(req:Request,res:Response){
    console.log("Loggin out");
    try {
        await token.invalidate(req.user);
        res.json({
            message: "Deslogeado"
        })
    } catch (error) {
        handle(res,error);
    }
    
}

function current(req:Request,res:Response){
    const user: User | undefined = mockedUsers.find((user)=>{
        return user.getId() == req.user.user_id;
    });

    if (user) {
        res.status(200).json({
            user: user.login
        })
    }else{
        handle(res,{
            code:404,
            message:"No se encontro el usuario"
        });
    }
}

async function getAllPrices(req:Request,res:Response){
    try {
        const result = await price.getAllPrices();
        res.status(200).json(result);
    } catch (error) {
        handle(res,error);
    }
}

async function getLastPrice(req:Request,res:Response){
    try {
        const result = await price.getLastPrice();
        res.status(200).json(result);
    } catch (error) {
        handle(res,error);
    }
}