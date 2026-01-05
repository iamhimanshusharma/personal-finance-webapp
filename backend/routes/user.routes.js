import { getUser, userLogin, userLogout, userSignIn, userTest, selfUser } from "../controllers/user.controllers.js";
import { Router } from "express";
import { authUser } from "../middlewares/user.middleware.js";

const userRouter = Router();

userRouter.route("/signin").post(userSignIn);
userRouter.route("/getuser").get(authUser, getUser);
userRouter.route("/login").post(userLogin);
userRouter.route("/logout").get(userLogout);
userRouter.route("/test").get(userTest);
userRouter.route("/me").get(selfUser);



export default userRouter