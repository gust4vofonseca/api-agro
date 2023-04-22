import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { UpdateUserController } from "../controllers/UpdateUserControlle";
import { DeletePUserController } from "../controllers/DeleteUserController";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { RefreshTokenController } from "../controllers/RefreshTokenController";

const userRouter = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeletePUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

userRouter.post('/create', createUserController.handle);
userRouter.post('/update', updateUserController.handle);
userRouter.post('/delete/:id', deleteUserController.handle);
userRouter.post("/sessions", authenticateUserController.handle);
userRouter.post("/refresh-token", refreshTokenController.handle);

export {
    userRouter
}