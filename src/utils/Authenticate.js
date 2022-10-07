import jwt from 'jsonwebtoken'
import {SECRET_KEY} from '../common/Constant'

export const SignIn = async(person) =>{
    try {

        return jwt.sign({user:person}, SECRET_KEY, {
            expiresIn: 86400 // 24 hours
        });

    } catch (error) {
        return ""
    }
}


export const GenerateTestToken = async()=>{
    try {

        return jwt.sign("unit_test", SECRET_KEY, {
            expiresIn: 86400 // 24 hours
        });

    } catch (error) {
        return ""
    }
}