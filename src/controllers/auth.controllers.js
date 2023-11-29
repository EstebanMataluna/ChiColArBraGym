import User from '../models/user.model.js'

export const register = (req, res) => {
    const {username, email, password} = req.body

    console.log(username,email,password)

    const newUser = new User({
        username,
        email,
        password
    })
    console.log(newUser)

    res.send('Registrando')
};

export const login = (req, res) => res.send('login');