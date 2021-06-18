/*
const sequelize = require('sequelize')
const conexao = new sequelize('testecagece','admin','@f18720#UP',{
    host:'localhost',
    dialect: 'mysql'

});

module.exports = conexao;
*/

const mysql = require('mysql2')
const connect = mysql.createPool(
    {
    host:'localhost',
    user:'admin',
    password:'@f18720#UP',
    database: 'testecagece',
  

});

module.exports = connect;