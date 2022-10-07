import { DataTypes } from 'sequelize';
import {db} from '../libs/DBConnection'


export const Todo = db.define('todo', {
    name: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    is_deleted: {
        type:DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type:DataTypes.STRING,
        allowNull: false
    },
    date_completed: {
        type:DataTypes.STRING,
        allowNull: true
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