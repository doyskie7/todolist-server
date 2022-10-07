import { DataTypes } from 'sequelize';
import {db} from '../libs/DBConnection'


export const User = db.define('user', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    name: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
});