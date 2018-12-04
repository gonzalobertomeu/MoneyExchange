'use strict'

import * as passport from './passport';
import { Token,mockedTokens } from "./token";

export async function create(userId:string): Promise<string>{
    try {
        const token: Token = new Token(userId);

        mockedTokens.push(token);
        return Promise.resolve(passport.getToken(token));
    } catch (error) {
        return Promise.reject(error);
    }
}

export async function invalidate(payload: passport.Payload): Promise<void> {
    try {
        const token = mockedTokens.find((token,ind)=>{
            return token.getId() == payload.token_id;
        });

        if(!token){
            throw {message:"Token no encontrado"}
        }
        if(!token.getValid()){
            throw {message:"Ya esta invalidado"}
        }
        const index = mockedTokens.indexOf(token);
        token.invalidate();

        mockedTokens[index] = token;
        return Promise.resolve();
    } catch (error) {
        return Promise.reject(error);
    }
}