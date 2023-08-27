"use strict";
exports.__esModule = true;
var config = {
    username: 'root',
    password: '123456',
    database: 'chatbot_database', // Nome do banco de dados atualizado
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
        keepAlive: true
    },
    logging: false
};
module.exports = config;
