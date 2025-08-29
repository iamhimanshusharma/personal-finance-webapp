import { Router } from "express";
import { authUser } from "../middlewares/user.middleware.js";
import { addCard } from "../controllers/card.controller.js";


const cardRouter = Router();

cardRouter.route("/addcard").post(authUser, addCard);

export default cardRouter;