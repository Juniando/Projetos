import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(postRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

