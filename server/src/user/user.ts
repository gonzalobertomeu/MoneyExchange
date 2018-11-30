'use strict'

/**
 * Toda esta parte estaria hecha con Mongoose aplicando los schemas de Mongo
 */

import * as uuid from "uuid/v4";
const crypto = require('sha1');

/* export interface IUser{
    login: string;
    password: string;
    updated: Date;
    created: Date;
    enabled: boolean;
    authenticate: Function;
} */

export class User{
    private id: string;
    login: string;
    private password: string;
    updated: Date;
    created: Date;
    enabled: boolean;

    constructor(login:string,password:string){
        this.id = uuid();
        this.login = login;
        this.password = crypto(password).toString();
        this.updated = new Date(Date.now());
        this.created = new Date(Date.now());
        this.enabled = true;
    }

    getId(){
        return this.id;
    }

    authenticate = function(toVerify: string):boolean{
        return this.password && this.password === crypto(toVerify).toString();
    }
}

export let mockedUsers: User[] = [];
mockedUsers.push(new User("gonzalo","berto2455"));
mockedUsers.push(new User("gonzo","homero"));

