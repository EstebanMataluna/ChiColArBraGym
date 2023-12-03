import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {TOKEN_SECRET} from '../config.js';
import {createAccessToken} from '../libs/jwt.js';


export const register = async (req, res) => {
    const {username, email, password} = req.body;

    // console.log(username,email,password)

    try {
        const userFound = await User.findOne({ email});
        if (userFound)
            // error va en un arreglo para que sea igual que zod
            return res.status(400).json(["El mail está previamente registrado"]);

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

export const login = async (req, res) => {
    const {email, password} = req.body;

    // console.log(username,email,password)

    try {

        const userFound = await User.findOne({email});
        if (!userFound) return res.status(400).json({message: "Usuario inexistente"});

        const isMatch = await bcrypt.compare (password, userFound.password);
        if (!isMatch) return res.status(400).json({message: "Password Incorrecta"});  

        const token = await createAccessToken({id:userFound._id});
        res.cookie("token", token)


        res.json({
            id:userFound._id,
            username:userFound.username,
            email:userFound.email,
            createdAt: userFound.createdAt,
            updateAt:userFound.updatedAt,
        });
        // res.send('Registrando');
        } catch (error) {
            // console.log(error);
            res.status(500).json({message: error.message});
        }
};

export const logout = (req, res) => {
    res.cookie('token', "", {exprires: new Date(0)});
    return res.status(200);
};

export const profile = async (req, res) => {
    //console.log(req.user);
    const userFound = await User.findById(req.user.id);

    if (!userFound) return res.status(400).json({message: "Usuario no encontrado"});
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updateAt: userFound.updateAt,
    })

}