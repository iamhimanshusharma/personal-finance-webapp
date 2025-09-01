import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    sendercardnumber: {
        type: Schema.Types.ObjectId,
        ref: "Card",
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    receivercardnumber: {
        type: Schema.Types.ObjectId,
        ref: "Card",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    senderUpdatedBalance: {
        type: Number,
        required: true
    },
    receiverUpdatedBalance: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export const Payment = mongoose.model("Payment", paymentSchema);