import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRoutes.js';
import authRouter from './routes/authRoutes.js';


const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "bug" });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
