import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const checkPostExists = async (req, res, next) => {
    const {id} = req.params;
    const post = await prisma.post.findUnique({
        where : { id : Number(id)},
    });

    if (!post) {
        return res.status(404).json({error : "Post não Encontrado"});
    }
    req.post = post
    next();
}

export default checkPostExists