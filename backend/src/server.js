const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use(postRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

