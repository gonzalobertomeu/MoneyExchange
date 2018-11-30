'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Toda esta parte estaria hecha con Mongoose aplicando los schemas de Mongo
 */
const uuid = require("uuid/v4");
const crypto = require('sha1');
/* export interface IUser{
    login: string;
    password: string;
    updated: Date;
    created: Date;
    enabled: boolean;
    authenticate: Function;
} */
class User {
    constructor(login, password) {
        this.authenticate = function (toVerify) {
            return this.password && this.password === crypto(toVerify).toString();
        };
        this.id = uuid();
        this.login = login;
        this.password = crypto(password).toString();
        this.updated = new Date(Date.now());
        this.created = new Date(Date.now());
        this.enabled = true;
    }
    getId() {
        return this.id;
    }
}
exports.User = User;
exports.mockedUsers = [];
exports.mockedUsers.push(new User("gonzalo", "berto2455"));
exports.mockedUsers.push(new User("gonzo", "homero"));
