import  { PrismaClient }  from '@prisma/client';
const prisma = new PrismaClient();

export const createPost = async (req, res) => {
    try {
        const {idCreator, image, stacks, about, linkRepo} = req.body;
        const post = await prisma.post.create({
            data : {
                idCreator, // usar apenas para testes, depois substituir por {idCreator : req.userId} !
                image,
                stacks,
                about,
                linkRepo,
            },
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

// implementar validações para somente usuarios administradores e o criador do post poder deletar.

export const deletePost = async (req, res) => {
    try {
        const {id} = req.params;
        const post = await prisma.post.delete({
            where : {id : Number(id)}
        })
        res.status(200).json({message : "Post Deletado", post});
    } catch ( error ) {
        res.status(400).json({error : error.message});
    }
};

export const getPost = async (req, res) =>{
    try {
        const {id} = req.params;
        const post = await prisma.post.findUnique({
            where : { id : Number(id)}
        })
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
};

export const getMyPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({where : {idCreator : req.userId}});
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}
