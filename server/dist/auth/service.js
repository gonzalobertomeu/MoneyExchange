'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../user/user");
function login(body) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            body = yield validateLogin(body);
            const user = user_1.mockedUsers.find((usuario) => {
                return usuario.login == body.login;
            });
            if (!user) {
                throw { message: "Usuario no encontrado" };
            }
            if (!user.authenticate(body.password || "")) {
                throw { message: "Error en la contraseña" };
            }
            return Promise.resolve(user);
        }
        catch (error) {
            return Promise.reject(error);
        }
    });
}
exports.login = login;
function validateLogin(body) {
    const errors = [];
    if (!body.password || body.password === "") {
        errors.push({
            path: "password",
            message: "No debe quedar vacío"
        });
    }
    if (!body.login || body.login === "") {
        errors.push({
            path: "login",
            message: "No debe quedar vacío"
        });
    }
    if (errors.length > 0) {
        return Promise.reject(errors);
    }
    return Promise.resolve(body);
}
