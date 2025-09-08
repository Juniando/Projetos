import  { PrismaClient }  from '@prisma/client';
const prisma = new PrismaClient();


export const createUser = async (req, res) => {
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

export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include : { posts: true },
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

export const deleteUser = async (req, res) => {
    try { 
        const {id} = req.params;
        const user = await prisma.user.delete({
            where : { id : Number(id)}
        });
        res.status(200).json({message : "Usuario Deletado", user})
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}
