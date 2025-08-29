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
        type: Date,
        required: true
    },
    bankname: {
        type: String,
        required: true
    },
    branch: {
        type: String,
    },
    type: {
        type: String,
        enum: ['credit', 'debit'],
        required: true
    },
}, { timestamps: true });


export const Card = mongoose.model("Card", cardSchema);