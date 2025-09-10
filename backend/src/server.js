import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';
import authRouter from './routes/authRoutes.js';


const app = express();
app.use(express.json());

app.use(authRouter);
app.use(userRouter);
app.use(postRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

app.get("/teste", (req, res) => {
    console.log(req.headers);
    res.send("ok");
});
