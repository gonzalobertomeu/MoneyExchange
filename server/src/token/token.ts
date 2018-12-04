'use strict'

/**
 * Toda esta parte estaria hecha con Mongoose aplicando los schemas de Mongo
 */

import * as uuid from "uuid/v4";

export class Token{
    private tokenId: string;
    private valid: boolean;
    private user: string;

    constructor(user: string){
        this.tokenId = uuid();
        this.valid = true;
        this.user = user;
    }

    getUser(){
        return this.user;
    }
    
    getId(){
        return this.tokenId;
    }
    
    getValid(){
        return this.valid;
    }

    invalidate(){
        this.valid = false;
    }
    validate(){
        this.valid = true;
    }
}

export let mockedTokens: Token[] = [];


