import User from '../models/user.model.js';
import { Jwt } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {TOKEN_SECRET} from '../config.js';
import {createAccessToken} from '../libs/jwt.js';


export const register = async (req, res) => {
    const {username, email, password} = req.body;

    // console.log(username,email,password)

    try {

        const passwordHash = await bcrypt.hash(password,10);    

        const newUser = new User({
            username,
            email,
            password:passwordHash,
        });
        // console.log(newUser)
    
        // Sólo creado hasta ahora en el backend
        // Para guardarlo en mongodb
        // newUser.save()
        // pero es asincrono por lo tanto debe ir con async await
        // e incluir en un try catch
    
        const userSaved = await newUser.save();
        // datos que se usarán en el frontend 
        const token = await createAccessToken({id:userSaved._id});
        res.cookie("token", token)
        //res.json({
        //    message:"Usuario creado",
        //});

        res.json({
            id:userSaved._id,
            username:userSaved.username,
            email:userSaved.email,
        });
        // res.send('Registrando');
        } catch (error) {
            // console.log(error);
            res.status(500).json({message: error.message});
        }
};

export const login = (req, res) => res.send('login');