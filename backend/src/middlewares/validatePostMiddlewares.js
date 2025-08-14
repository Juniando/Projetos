const validatePost = (req, res, next) => {
    
    const { idCreator, image, stacks, about, linkRepo } = req.body;

    if (!idCreator || !about) {
        return res.status(400).json({error : "idCreator e about são obrigatorios"});
    }

    if (!Array.isArray(stacks)) {
        return res.status(400).json({error : "stacks precisa ser um array"});
    }

    if (!stacks.every(s => typeof s == 'string')) {
        return res.status(400).json({èrror : " cada item de stacks precisa ser uma string"});
    }

    next();
};

module.exports = validatePost;