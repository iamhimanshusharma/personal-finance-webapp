import { getUser, userLogin, userLogout, userSignIn, userTest } from "../controllers/user.controllers.js";
import { Router } from "express";
import { authUser } from "../middlewares/user.middleware.js";

const userRouter = Router();

userRouter.route("/signin").post(userSignIn);
userRouter.route("/getuser").get(authUser, getUser);
userRouter.route("/login").post(userLogin);
userRouter.route("/logout").get(userLogout);
userRouter.route("/test").get(userTest);


export default userRouter