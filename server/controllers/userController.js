"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var User = require('../models/userModel.js');
var bcrypt = require('bcrypt');
var userController = {};
userController.createUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, ARN, region, hashedPassword, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password, ARN = _a.ARN, region = _a.region;
                return [4 /*yield*/, bcrypt.hash(password, 10)];
            case 1:
                hashedPassword = _b.sent();
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, User.create({ username: username, password: hashedPassword, ARN: ARN, region: region })];
            case 3:
                newUser = _b.sent();
                res.locals.signUpUsername = newUser.username;
                return [2 /*return*/, next()];
            case 4:
                error_1 = _b.sent();
                return [2 /*return*/, next({
                        log: "The following error occured: ".concat(error_1),
                        status: 400,
                        message: { error: 'An error occured while trying to create a new user' }
                    })];
            case 5: return [2 /*return*/];
        }
    });
}); };
userController.getAllUsers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var allUsers, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User.find({})];
            case 1:
                allUsers = _a.sent();
                res.locals.allUsers = allUsers;
                return [2 /*return*/, next()];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, next({
                        log: "The following error occured: ".concat(error_2, " in getAllUsers"),
                        status: 400,
                        message: { error: 'An error occured while trying to get all users' }
                    })];
            case 3: return [2 /*return*/];
        }
    });
}); };
userController.login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, userResult, hashedPassword, isPasswordMatch, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, User.findOne({ username: username })];
            case 1:
                userResult = _b.sent();
                console.log('userResult', userResult);
                //if userResult return nothing, throw err
                if (userResult === null || userResult === undefined) {
                    return [2 /*return*/, next({
                            log: "The following error occured: input fields not filled properly",
                            status: 400,
                            message: 'invalid username or password'
                        })];
                }
                console.log('past the conditional');
                hashedPassword = userResult.password;
                return [4 /*yield*/, bcrypt.compare(password, hashedPassword)];
            case 2:
                isPasswordMatch = _b.sent();
                if (!isPasswordMatch) {
                    return [2 /*return*/, next({
                            log: "The following error occured: invalid username or password",
                            status: 400,
                            message: 'invalid username or password'
                        })];
                }
                // console.log('passwords match!')
                res.locals.loginUsername = userResult.username;
                return [2 /*return*/, next()];
            case 3:
                err_1 = _b.sent();
                return [2 /*return*/, next({
                        log: "The following error occured in login: ".concat(err_1),
                        status: 400,
                        message: { err: "An error occured while trying to login" }
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
userController.updateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, newARN, newRegion, updated, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, newARN = _a.newARN, newRegion = _a.newRegion;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, User.findOneAndUpdate({ _id: req.cookies.SSID }, { ARN: newARN, region: newRegion }, { new: true })];
            case 2:
                updated = _b.sent();
                console.log('req.cookies.SSID', req.cookies.SSID);
                console.log('updated: ', updated);
                res.locals.updatedUser = updated;
                return [2 /*return*/, next()];
            case 3:
                err_2 = _b.sent();
                return [2 /*return*/, next({
                        log: "The following error occured: ".concat(err_2),
                        status: 400,
                        message: { err: "An error occured while trying to update a user" }
                    })];
            case 4: return [2 /*return*/];
        }
    });
}); };
module.exports = userController;
