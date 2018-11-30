'use strict'

import { ValidationErrors } from "../utils/error";
import { mockedUsers, User } from "../user/user";


export interface ILoginRequest{
    login?: string;
    password?: string;
}
export async function login(body: ILoginRequest):Promise<User>{

    try {
        body = await validateLogin(body);
        const user = mockedUsers.find((usuario)=>{
            return usuario.login == body.login;
        });
        
        if(!user){
            throw {message:"Usuario no encontrado"}
        }
        if(!user.authenticate(body.password || "")){
            throw {message:"Error en la contraseña"}
        }
        return Promise.resolve(user);
    } catch (error) {
        return Promise.reject(error);
    }

}

function validateLogin(body:ILoginRequest):Promise<ILoginRequest>{

    const errors: ValidationErrors[] = []

    if(!body.password || body.password===""){
        errors.push({
            path:"password",
            message:"No debe quedar vacío"
        });
    }
    if(!body.login || body.login===""){
        errors.push({
            path:"login",
            message:"No debe quedar vacío"
        });
    }
    if(errors.length>0){
        return Promise.reject(errors);
    }
    return Promise.resolve(body);
}