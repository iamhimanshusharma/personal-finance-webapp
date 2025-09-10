import { User } from "../models/user.models.js"
import brcypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const userSignIn = async (req, res) => {

    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(401).json({
                success: false,
                message: "Something is missiong"
            })
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(404).json({
                success: false,
                message: "User alredy exists"
            })
        }

        const hashedPassword = await brcypt.hash(password, 10);

        const userData = {
            fullname, email, password: hashedPassword
        }

        const response = (await User.create(userData));

        if (!response) {
            return res.status(404).json({
                success: false,
                message: "User not registered"
            })
        }

        const token = await jwt.sign({
            userId: response._id,
        }, process.env.JWT_TOKEN_SECRET, { expiresIn: '1d' });

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: "Sign Successful",
            success: true,
            user: userData
        })
    } catch (error) {
        console.log(error)
    }

}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({
                success: false,
                message: "Something is missiong"
            })
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            })
        }

        const isPasswordCorrect = await brcypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Password is wrong"
            })
        }

        const token = await jwt.sign({
            userId: user._id,
        }, process.env.JWT_TOKEN_SECRET, { expiresIn: '1d' });

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: "Login Successful",
            success: true,
            user: user
        })

    } catch (error) {
        console.log(error);
    }
}

export const getUser = async (req, res) => {
    const userId = req.userId;

    try {
        const user = await User.findById(userId).select("-password").populate("cards");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "User found",
            user: user
        })

    } catch (error) {
        console.log(error)
    }
}

export const userLogout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            success: true,
            message: "Logout Successful"
        })
    } catch (error) {
        console.log(error)
    }
}

export const userTest = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: "It's working"
        })
    } catch (error) {
        console.log(error);
    }
}