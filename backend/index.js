import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});
import { dbConnect } from "./db/db.js";
import userRouter from "./routes/user.routes.js";
import cardRouter from "./routes/card.route.js";
import paymentRouter from "./routes/payment.route.js";

const app = express();

app.use(cookieParser());
app.use(
    cors({
        origin: "https://finance-frontend-pi.vercel.app",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/user/card", cardRouter);
app.use("/api/v1/user/payment", paymentRouter);

// const dbConnection = async () => {
//     try {
//         await dbConnect();
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running at port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }

// if (process.env.NODE_ENV == "development") {
//     dbConnection();
// }

dbConnect().catch(console.error);

export default app;