import {Router} from 'express';
//const router = express.Router();
//const Disciplina = require('../models/disciplinaModel.js'); // Importa el modelo de disciplina
import Disciplina from "../models/disciplinas.model.js";

import  {getDicxid} from "../controllers/disciplinas.controllers.js";
import { auth } from '../middlewares/auth.middlewares.js';


const router = Router();

router.get('/disciplinas', async (req, res) => {
    //console.log("llamado a api /disciplin")
  try {
    const disciplinas = await Disciplina.find(); // Busca todas las disciplinas en la colección
    res.json(disciplinas); // Devuelve las disciplinas como respuesta
  } catch (error) {
    res.status(500).json({ message: error.message }); // Maneja los errores
  }
});

router.get("/Disciplina/:id", auth , getDicxid);

export default  router;