import { verifyToken } from "../services/authService.js";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    
    if (!token) return res.status(401).json({ error: "Token não fornecido" });

    try {
        const decoded = verifyToken(token);
        req.userId = decoded.userId;
        req.userRole = decoded.role;
        next();
    } catch (error) {
        res.status(403).json({ error: "Token inválido ou expirado" });
    }
}

export default authMiddleware;

