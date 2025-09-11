import  { PrismaClient }  from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();


export const createUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;

        if (!password) return res.status(400).json({error : "Senha Obrigatória"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {

                name,
                email,
                password : hashedPassword,
                role : "user",
                
            },
        });
        const { password: _, ...userWithoutPassword } = user;
        res.status(201).json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ error : error.message});
    }
};

export const createAdminUser = async (req,res) => {
    try { 
        const {name, email, password} = req.body;

        if (!password) return res.status(400).json({error : "Senha Obrigatória"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await prisma.user.create({
            data : {
                name,
                email,
                password : hashedPassword,
                role : "admin",
            }
        });
        const {password: _, ...adminWithoutPassword} = admin;
        res.status(201).json(adminWithoutPassword);
    } catch (error) {
        res.status(400).json({error : error.message});
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

export const getMe = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where : {
                id : req.userId
            },
            include : {
                posts : true,
            }
        });
        res.status(200).json(user);
        if (!user) return res.status(404).json({error : "User não encontrado"});
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
};
