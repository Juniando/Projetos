const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();


const createUser = async (req, res) => {
    try {
        
        const {name, email} = req.body;
        
        const user = await prisma.user.create({
            data: {name, email},
        });

        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error : error.message});
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include : { posts: true },
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};


module.exports = {
    createUser,
    getAllUsers,
}