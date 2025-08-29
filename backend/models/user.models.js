import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    cards: [{
        type: Schema.Types.ObjectId,
        ref: "Card"
    }]
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);