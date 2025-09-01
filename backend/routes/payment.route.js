import { Router } from "express";
import { getAllPayments, payToUser } from "../controllers/payment.controller.js";
import { authUser } from "../middlewares/user.middleware.js"

const paymentRouter = Router();

paymentRouter.route("/pay").post(authUser, payToUser);
paymentRouter.route("/allpayments").get(authUser, getAllPayments);


export default paymentRouter;