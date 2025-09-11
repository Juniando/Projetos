import  { PrismaClient }  from '@prisma/client';
const prisma = new PrismaClient();

export const createPost = async (req, res) => {
    try {
        const {idCreator, title, image, stacks, about, linkRepo} = req.body;
        const post = await prisma.post.create({
            data : {
                idCreator : req.userId,
                title,
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

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await prisma.post.findUnique({
            where: { id: Number(id) },
        });
        if (!post) {
            return res.status(404).json({ error: "Post não encontrado" });
        }
        if (post.idCreator !== req.userId && req.userRole !== "admin") {
            return res.status(403).json({ error: "Você não tem permissão para deletar este post" });
        }
        const deletedPost = await prisma.post.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({ message: "Post deletado", post: deletedPost });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
