import { Card } from "../models/card.model.js";
import { Payment } from "../models/payment.model.js";
import { User } from "../models/user.models.js";
import mongoose from "mongoose";

export const payToUser = async (req, res) => {
    try {
        const { sendercardnumber, receivercardnumber, amount } = req.body;

        const getSenderCardDetails = await Card.findOne({ cardnumber: sendercardnumber });

        if (!getSenderCardDetails) {
            return res.status(404).json({
                success: false,
                message: "Sender not found"
            })
        }

        if (getSenderCardDetails.balance < amount) {
            return res.status(404).json({
                success: false,
                message: "Insufficient balance"
            })
        }

        const getReceiverCardDetails = await Card.findOne({ cardnumber: receivercardnumber });

        if (!getReceiverCardDetails) {
            return res.status(404).json({
                success: false,
                message: "Receiver not found"
            })
        }

        const senderCurrBalance = getSenderCardDetails.balance - parseInt(amount);
        const receiverCurrBalance = getReceiverCardDetails.balance + parseInt(amount);

        const response = await Payment.create({
            sender: getSenderCardDetails.user,
            sendercardnumber: getSenderCardDetails._id,
            receiver: getReceiverCardDetails.user,
            receivercardnumber: getReceiverCardDetails._id,
            amount: amount,
            senderUpdatedBalance: senderCurrBalance,
            receiverUpdatedBalance: receiverCurrBalance
        });

        if (!response) {
            return res.status(404).json({
                success: false,
                message: "Receiver not found"
            })
        }

        const updateSender = await Card.findOneAndUpdate({ cardnumber: sendercardnumber }, { balance: senderCurrBalance, });
        const updateReceiver = await Card.findOneAndUpdate({ cardnumber: receivercardnumber }, { balance: receiverCurrBalance });
        await updateSender.save();
        await updateReceiver.save();

        return res.status(200).json({
            success: true,
            message: "Payment Done",
            payment: response
        })
    } catch (error) {
        console.log(error)
    }

}

export const getAllPayments = async (req, res) => {
    try {
        const userId = req.userId;

        // const allPayment = await Payment.find({ $or: [{ sender: userId }, { receiver: userId }] })
        //     .populate("sender", "fullname")
        //     .populate("sendercardnumber", "cardnumber")
        //     .populate("receiver", "fullname")
        //     .populate("receivercardnumber", "cardnumber")
        //     .sort({ createdAt: -1 })

        const allPayment = await Payment.aggregate([
            {
                $match: {
                    $or: [
                        { sender: new mongoose.Types.ObjectId(userId) },
                        { receiver: new mongoose.Types.ObjectId(userId) }
                    ]
                }
            },
            {
                $lookup: {
                    from: "users",           // collection name in MongoDB
                    localField: "sender",
                    foreignField: "_id",
                    as: "sendername"
                }
            },
            { $unwind: "$sendername" },
            {
                $lookup: {
                    from: "cards",           // collection name in MongoDB
                    localField: "sendercardnumber",
                    foreignField: "_id",
                    as: "sendercardnumber"
                }
            },
            { $unwind: "$sendercardnumber" },
            {
                $lookup: {
                    from: "users",           // collection name in MongoDB
                    localField: "receiver",
                    foreignField: "_id",
                    as: "receivername"
                }
            },
            { $unwind: "$receivername" },
            {
                $lookup: {
                    from: "cards",           // collection name in MongoDB
                    localField: "receivercardnumber",
                    foreignField: "_id",
                    as: "receivercardnumber"
                }
            },
            { $unwind: "$receivercardnumber" },
            {
                $project: {
                    sender: 1,
                    receiver: 1,
                    amount: 1,
                    sendername: "$sendername.fullname",
                    sendercardnumber: "$sendercardnumber.cardnumber",
                    receivername: "$receivername.fullname",
                    receivercardnumber: "$receivercardnumber.cardnumber",
                    senderUpdatedBalance: 1,
                    receiverUpdatedBalance: 1,
                    createdAt: 1,
                    currentBalance: {
                        $cond: [
                            { $eq: ["$sender", new mongoose.Types.ObjectId(userId)] },
                            "$senderUpdatedBalance",
                            "$receiverUpdatedBalance"
                        ]
                    }
                }
            },
            {
                $sort: { createdAt: -1 }
            }
        ])



        if (!allPayment) {
            return res.status(404).json({
                success: false,
                message: "No payment found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "All Cards",
            payments: allPayment
        })
    } catch (error) {
        console.log(error)
    }
}