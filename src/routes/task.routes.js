import { Router } from "express";
import { auth } from "../middlewares/auth.middlewares.js"; 
import { getTasks, getTask, createTask, udateTask, deleteTask } from "../controllers/task.controllers.js";

const router = Router();

router.get('/tasks', auth, getTasks )

router.get('/tasks/:id', auth, getTask )

router.post('/tasks', auth, createTask )
router.delete('/tasks/:id', auth, deleteTask )
router.put('/tasks/:id', auth, udateTask )


export default router