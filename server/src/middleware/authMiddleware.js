import jwt from "jsonwebtoken"

const authMiddleware = async(req, res, next)=>{
try {
    const {token} = req.cookies
    if (!token) {
        return res.status(200).json({success: false, message:"user don't have a token"})
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
        return res.status(401).json({success: false, message:"user don't have a valid token"}) 
    }
    req.userId = verifyToken.userId;

    next()
} catch (error) {
    res.status(401).json({success:false, message: error.message})
}
}
export default authMiddleware