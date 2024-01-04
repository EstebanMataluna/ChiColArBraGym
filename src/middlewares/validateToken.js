import jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from '../config.js';


export const authRequired = (req, res, next) => {
    // console.log(req.user);  cookie : 'token = kkfk....
    // const token = req.headers.cookie; para no tener que separar del header instalar cookie-parser
    const {token} = req.cookies
console.log("Entra en authRequired. user: ")
    if (!token) {
        console.log("authRequired denegada ")
        return res.status(401).json({message: "Autorización denegada"});}

    jwt.verify(token, TOKEN_SECRET, (err, user)=> {
        
        if (err) {
            console.log("authRequired token  invalido");
            return res.status(403).json({message:"Token Inválido"});

        }
        // console.log(user);
        req.user = user
        next();
    })
};