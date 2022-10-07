import HashPassword from "../utils/GenerateHashPassword";
import {User} from '../model/User'
import { HasDuplicateEmail,isPasswordMatched } from "../utils/CheckDuplicates";
import { SignIn } from "../utils/Authenticate";

export const SignUp = async (req,res) => {
    try {
        let name = req.body?.name;
        let email = req.body?.email;
        let password = req.body?.password;
        let conpassword = req.body?.conpassword;

        if(password === conpassword){

            let hashpassword = HashPassword(password);

            if(await HasDuplicateEmail(email) === null){
                await User.create({
                    name:name,
                    email:email,
                    password:hashpassword,
                })

                res.status(200).send({
                    message:"Account successfully created!",
                    status:"success"
                })
            }else{
                res.status(202).send({
                    message:"Email already registered!",
                    status:"error"
                })
            }


        }else{
            res.status(202).send({
                message:"Password and confirm password did not match",
                status:"error"
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message:error,
            status:"error"
        })
    }
}

export const Login = async (req,res) => {
    try {
        let email = req.body?.email;
        let password = req.body?.password;

        if(await HasDuplicateEmail(email) !== null){
            
            let user = await HasDuplicateEmail(email)
            let hashedPassword = user.dataValues.password
            let name  = user.dataValues.name

            if(await isPasswordMatched(password,hashedPassword)){
                let token = await SignIn({  email:email, password:password });
                res.status(200).send({
                    user: {
                        name:name,
                        email:email,
                        token:token
                    }
                })
            }else{
                res.status(202).send({
                    message:"Wrong password or email not found",
                    status:"error"
                })
            }

        }else{
            res.status(202).send({
                message:"Cannot found email address!",
                status:"error"
            })
        }

    } catch (error) {
        res.status(500).send({
            message:error,
            status:"error"
        })
    }
}

export const VerifyToken = (req,res) => {
    res.status(200).send({success: true, message: "Authorized!"});
}