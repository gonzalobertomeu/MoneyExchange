'use strict'

import { Router, Response, Request } from "express";
import * as user from "../user/service";
import { User,mockedUsers } from "../user/user";
import * as token from "../token/service";
import * as passport from 'passport';

export function init(router:Router){
    router.route("/login").post(SignIn);
    router.route("/logout").get(passport.authenticate("jwt",{session:false}),logout);
    router.route("/hw").get(passport.authenticate("jwt",{session:false}),HelloWorld);
    router.route("/current").get(passport.authenticate("jwt",{session:false}),current);
}



function HelloWorld(req:Request,res:Response){
    res.json({
        message:"Hello World!"
    });
}

async function SignIn(req:Request,res:Response){
    console.log("Signing in");
    try {
        const userID = await user.login(req.body);
        const tokenString = await token.create(userID);
        res.status(200).json({
            token: tokenString
        });

    } catch (error) {
        res.status(500).send({
            error
        });
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
        res.status(500).json({error});
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
    }
    
}