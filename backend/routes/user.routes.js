import { getUser, userLogin, userLogout, userSignIn } from "../controllers/user.controllers.js";
import { Router } from "express";
import { authUser } from "../middlewares/user.middleware.js";

const userRouter = Router();

userRouter.route("/signin").post(userSignIn);
userRouter.route("/getuser").get(authUser, getUser);
userRouter.route("/login").post(userLogin);
userRouter.route("/logout").get(userLogout);


export default userRouter