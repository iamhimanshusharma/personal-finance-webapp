import { Router } from "express";
import { authUser } from "../middlewares/user.middleware.js";
import { addCard, getAllCards } from "../controllers/card.controller.js";


const cardRouter = Router();

cardRouter.route("/addcard").post(authUser, addCard);
cardRouter.route("/cards").get(authUser, getAllCards);

export default cardRouter;