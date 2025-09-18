import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({});
import { dbConnect } from "./db/db.js";
import userRouter from "./routes/user.routes.js";
import cardRouter from "./routes/card.route.js";
import paymentRouter from "./routes/payment.route.js";
import { USER_URI } from "./constants.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());

const corsOptions = {
    origin: USER_URI,
    credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/user/card", cardRouter);
app.use("/api/v1/user/payment", paymentRouter);

app.listen(PORT, () => {
    dbConnect();
    console.log(`Server is running at port ${PORT}`);
})

export default app;