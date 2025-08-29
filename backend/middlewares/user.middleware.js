import jwt from "jsonwebtoken"

export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(404).json({
                success: false,
                message: "User not authorized"
            })
        }

        const decodedToken = await jwt.verify(token, process.env.JWT_TOKEN_SECRET);

        if (!decodedToken) {
            return res.status(404).json({
                success: false,
                message: "Something is wrong"
            })
        }

        req.userId = decodedToken.userId;

        next();

    } catch (error) {
        console.log(error)
    }
}