import { User } from "../model/User"
import { Todo } from "../model/Todo"
var bcrypt = require("bcrypt");

export const HasDuplicateEmail = async(email) => {
    try {
        let user = await User.findOne({
            where:{
                email:email
            }
        })
        if(user !== null){
            return user
        }
        return null

    } catch (error) {

        return error;
    }
}

export const isPasswordMatched = async (password,hasedPassword) => {
    try {
        return bcrypt.compareSync(password,hasedPassword);

    } catch (error) {

        return error;
    }
}

export const CheckTodoDuplicate = async (word,status,description) =>{
    let foundOne = await Todo.findOne({
        where:{
            name:word,
            is_deleted:0,
            status:status
        }
    })
    if(foundOne !== null){
        return true
    }
    return false
}

