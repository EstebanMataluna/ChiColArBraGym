import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    try {
        const task = await Task.find({ user : req.user.id}).populate("user");
        res.json(task);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const createTask = async (req, res) => {
    try {
        const { clase, descripcion, profesor, dia, hs, user } = req.body;
        console.log(clase, descripcion, profesor, dia, hs, user);
        const newTask = new Task({
            clase, 
            descripcion, 
            profesor, 
            dia, 
            hs,
            user
        })
        const savedTask =  await newTask.save();
        res.json(savedTask);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id); //de url pasada
        if (!task) return res.status(404).json({message:"Clase no encontrada"});
        return res.json(task);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const udateTask = async (req, res) => {
    try {
        const { clase, descripcion, profesor, dia, hs } = req.body;
        const taskUpdated = await Task.findOneAndUpdate(
            {_id: req.params.id},
            { clase, descripcion, profesor, dia, hs },
            { new:true}
        );
        return res.json(taskUpdated);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteTask = async (req, res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id);
        if (!deleteTask)
            return res.status(404).json({message:"Clase no encontrada"});
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}