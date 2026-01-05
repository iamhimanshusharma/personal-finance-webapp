import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema(
    {
        invoiceNumber: {
            type: String,
            required: true,
            unique: true,
        },
        invoiceDate: {
            type: Date,
            required: true,
            default: Date.now,
        },
        dueDate: {
            type: Date,
        },

        senderName: {
            type: String,
            required: true,
            trim: true,
        },
        senderEmail: {
            type: String,
            required: true,
            trim: true,
        },

        clientName: {
            type: String,
            required: true,
            trim: true,
        },
        clientEmail: {
            type: String,
            trim: true,
        },

        amount: {
            type: Number,
            required: true,
            min: 0,
        },

        status: {
            type: String,
            enum: ["Pending", "Paid", "Overdue"],
            default: "Pending",
        },
    },
    {
        timestamps: true,
    }
);

const Invoice = mongoose.model("Invoice", InvoiceSchema);

export default Invoice;
