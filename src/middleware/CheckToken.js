var jwt = require("jsonwebtoken");
import { SECRET_KEY } from "../common/Constant";


export const TokenChecker = async(req,res, next)=>{
    try {
        let token = req.headers["x-access-token"];
        if (!token) {
            return res.status(403).send({
                message: "No token provided!"
            });
        }
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(200).send({
                    message: "Unauthorized!"
                });
            }
            req.userId = decoded.id;
            next();
        });

    } catch (error) {
        res.status(500).send({message: error.message});
    }
}