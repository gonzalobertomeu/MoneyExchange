'use strict'

import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { Token, mockedTokens } from "./token";
import * as appConf from "../utils/config";

export interface Payload {
    token_id:string,
    user_id:string
}

const conf = appConf.getConfig(process.env);

export function init() {
    const params = {
        secretOrKey: conf.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }

    passport.use(new Strategy(params,function(payload: Payload,done){
        
        const token = mockedTokens.find((token)=>{
            return token.getId() == payload.token_id;
        });

        if(!token){
            return done(undefined,false);
        }
        if(!token.getValid()){
            return done(undefined,false,{message: "Invalid token"});
        }
        return done(undefined,payload);
    }));
}

export function getToken(token:Token): string{
    const payload: Payload = { user_id: token.getUser(), token_id: token.getId() };
    const myToken = jwt.sign(payload,conf.secret);

    return myToken;
}