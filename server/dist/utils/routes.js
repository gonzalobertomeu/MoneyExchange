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
const user = require("../user/service");
const user_1 = require("../user/user");
const token = require("../token/service");
const passport = require("passport");
function init(router) {
    router.route("/login").post(SignIn);
    router.route("/logout").get(passport.authenticate("jwt", { session: false }), logout);
    router.route("/hw").get(passport.authenticate("jwt", { session: false }), HelloWorld);
    router.route("/current").get(passport.authenticate("jwt", { session: false }), current);
}
exports.init = init;
function HelloWorld(req, res) {
    res.json({
        message: "Hello World!"
    });
}
function SignIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Signing in");
        try {
            const userID = yield user.login(req.body);
            const tokenString = yield token.create(userID);
            res.status(200).json({
                token: tokenString
            });
        }
        catch (error) {
            res.status(500).send({
                error
            });
        }
    });
}
function logout(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Loggin out");
        try {
            yield token.invalidate(req.user);
            res.json({
                message: "Deslogeado"
            });
        }
        catch (error) {
            res.status(500).json({ error });
        }
    });
}
function current(req, res) {
    const user = user_1.mockedUsers.find((user) => {
        return user.getId() == req.user.user_id;
    });
    if (user) {
        res.status(200).json({
            user: user.login
        });
    }
}
