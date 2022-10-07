import { Sequelize } from 'sequelize';
require('dotenv').config()



export const db  = new Sequelize(
    process.env.db || 'todo_list', 
    process.env.dbusername || 'root', 
    process.env.dbpassword || '', 
    {
        host:  process.env.host || 'localhost', 
        dialect: "mysql",
    }
);