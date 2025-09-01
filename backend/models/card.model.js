import mongoose, { Schema } from "mongoose";

const cardSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
    },
    cvv: {
        type: Number,
        required: true
    },
    cardnumber: {
        type: Number,
        required: true,
        unique: true
    },
    expiry: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
    balance: {
        type: Number,
        default: 20000,
        required: true
    }
}, { timestamps: true });


export const Card = mongoose.model("Card", cardSchema);