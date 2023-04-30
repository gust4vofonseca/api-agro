import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { UpdateUserController } from "../controllers/UpdateUserControlle";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { RefreshTokenController } from "../controllers/RefreshTokenController";
import { ListAllUsersController } from "../controllers/ListAllUsersController";

const userRouter = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();
const leistAllUsersController = new ListAllUsersController();

userRouter.post('/create', createUserController.handle);
userRouter.post('/update', updateUserController.handle);
userRouter.post('/delete/:id', deleteUserController.handle);
userRouter.post("/sessions", authenticateUserController.handle);
userRouter.post("/refresh-token", refreshTokenController.handle);
userRouter.get("/", leistAllUsersController.handle)

export {
    userRouter
}