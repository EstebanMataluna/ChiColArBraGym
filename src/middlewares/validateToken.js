import jwt from 'jsonwebtoken';
import {TOKEN_SECRET} from '../config.js';


export const authRequired = (req, res, next) => {
    // console.log(req,Headers); cookie : 'token = kkfk....
    // const token = req.headers.cookie; para no tener que separar del header instalar cookie-parser
    const {token} = req.cookies

    if (!token) return res.status(401).json({message: "Autorización denegada"});

    jwt.verify(token, TOKEN_SECRET, (err, user)=> {
        if (err) return res.status(403).json({message:"Token Inválido"});
        // console.log(user);
        req.user = user
        next();
    })
};