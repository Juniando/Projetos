const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const createPost = async (req, res) => {
    try {
        
        const {idCreator, image, snacks, about, linkRepo} = req.body;
        
        const post = await prisma.post.create({
            data : {
                idCreator,
                image,
                snacks,
                about,
                linkRepo,
            },
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

const getAllPosts = async (req, res) => {
    try {

        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}


module.exports = {
    createPost,
    getAllPosts
}