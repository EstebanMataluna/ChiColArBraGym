import Disciplina from "../models/disciplinas.model.js";

export const getDisciplinas = async (req,res) => {
    console.log("llamado a api Todas las disciplinas/clases")
  try {
    const disciplinas = await Disciplina.find(); // Busca todas las disciplinas en la colección
    res.json(disciplinas); // Devuelve las disciplinas como respuesta
  } catch (error) {
    res.status(500).json({ message: error.message }); // Maneja los errores
  }
};

export const getDicxid = async (req, res) => {
    console.log("llamado a api 1 disciplina")
  try {
    const disciplina = await Disciplina.findById(req.params.id); // Busca todas las disciplinas en la colección
    if (!disciplina) return res.status(400).json({message: "Disciplina/clase no encontrada"});
    res.json(disciplina); // Devuelve 1 disciplina como respuesta
  } catch (error) {
    res.status(500).json({ message: error.message }); // Maneja los errores
  }
};