import { Router } from "express";
import {login, register, logout, verifyToken} from "../controllers/auth.controllers.js";
// import {authRequired} from '../middlewares/validateToken.js';
import {validateSchema} from '../middlewares/validator.middleware.js'
import {registerSchema, loginSchema} from '../schemas/auth.schema.js'

const router = Router()

router.post('/register', validateSchema(registerSchema),register);

router.post('/login', validateSchema(loginSchema), login);

router.get('/verify', verifyToken); // protec

router.post('/logout', verifyToken, logout);

// ej para rutas protegidas  router.get('/profile', authRequired,  profile); // protegida

export default router 