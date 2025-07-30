const prisma = require('../config/prisma')


async function getAllUsers(req, res) {
    try {
        const users = await prisma.user.findMany();
        res.json(users);

    } catch (error) {
        console.error(error);
        res.status(500).json({error : 'Erro ao buscar Usuarios'});
    }
}

module.exports = {
    getAllUsers,
}