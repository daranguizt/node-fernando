"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        message: 'getUsers',
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'getUser',
        id
    });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const { id, name } = req.body;
    res.json({
        message: 'createUser',
        user: {
            id,
            name
        }
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const _a = req.body, { id, name } = _a, rest = __rest(_a, ["id", "name"]);
    res.json({
        message: 'updateUser',
        user: Object.assign({ id,
            name }, rest)
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleteUser',
    });
};
exports.deleteUser = deleteUser;
