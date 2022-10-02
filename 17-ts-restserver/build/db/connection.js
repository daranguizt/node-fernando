"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('db_test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: Number(process.env.DB_PORT)
});
exports.default = db;
