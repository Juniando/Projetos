const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/routes');


dotenv.config();

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.send('rota /api funcionando')
})

app.use('/api', userRoutes);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})

