'use strict'

import { Router, Response, Request } from "express";
import * as auth from "../auth/service";

export function init(router:Router){
    router.route("/login").post(SignIn);
}


async function SignIn(req:Request,res:Response){
    console.log("Signing in");
    try {
        const userID = await auth.login(req.body);
        res.json({
            id_usuario: userID
        });

    } catch (error) {
        res.status(500).send({
            error
        });
    }
}