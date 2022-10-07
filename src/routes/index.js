import express from 'express';
var cors = require('cors')
const app = express();
import bodyParser from 'body-parser'
import {CreateToDo,GetAllToDo,UpdateToDo,DeleteToDo} from '../controller/TodoList'
import { SignUp,Login,VerifyToken } from '../controller/User';
import { TokenChecker } from '../middleware/CheckToken';

export const Start = (port) =>{
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '100mb',
        parameterLimit:100000
    }));
    app.use(bodyParser.json({
        limit: '100mb'
    }));
    app.use(cors());

    
    app.post('/api/signin-user',SignUp)
    app.post('/api/login-user',Login)
    app.post('/api/logout-user',VerifyToken)
    app.post('/api/check-auth',TokenChecker,VerifyToken)


    app.post('/api/create-todo',TokenChecker,CreateToDo)
    app.post('/api/fetch-todo',TokenChecker,GetAllToDo)
    app.post('/api/update-todo',TokenChecker,UpdateToDo)
    app.post('/api/delete-todo',TokenChecker,DeleteToDo)


    app.listen(port)

    return app;
}