import express, { json } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'


import authRoutes from './routes/auth.routes.js';
import disciplinaRouter from './routes/disciplinas.routes.js';
import taskRoutes from './routes/task.routes.js'; 

const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
  }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", disciplinaRouter);
app.use("/api", taskRoutes);

export default app;