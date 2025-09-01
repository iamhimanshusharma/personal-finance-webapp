import { Card } from "../models/card.model.js"
import { User } from "../models/user.models.js";


export const addCard = async (req, res) => {
    try {
        const userId = req.userId;
        const { name, cvv, cardnumber, expiry, bankname, type, branch } = req.body;

        if (!name || !cvv || !cardnumber || !expiry || !type) {
            return res.status(404).json({
                success: false,
                message: "Something is missing"
            })
        }

        const cardExist = await Card.findOne({ cardnumber });

        if (cardExist) {
            return res.status(404).json({
                success: false,
                message: "Card already exists"
            })
        }

        const card = await Card.create({ user: userId, name, cvv, cardnumber, expiry, bankname, branch, type });

        if (!card) {
            return res.status(400).json({
                success: false,
                message: "Card not added"
            })
        }

        const updateUser = await User.findOneAndUpdate({ _id: userId }, { $push: { cards: card._id } });
        await updateUser.save();

        return res.status(200).json({
            success: true,
            message: "Card added"
        })


    } catch (error) {
        console.log(error);
    }
}

export const getAllCards = async (req, res) => {
    try {
        const allCards = await Card.find({});

        if (!allCards) {
            return res.status(200).json({
                success: false,
                message: "No card found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "All Cards",
            cards: allCards
        })
    } catch (error) {
        console.log(error)
    }
}