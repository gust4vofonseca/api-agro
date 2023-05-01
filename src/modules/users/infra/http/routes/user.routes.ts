import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { UpdateUserController } from "../controllers/UpdateUserControlle";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { RefreshTokenController } from "../controllers/RefreshTokenController";
import { ListAllUsersController } from "../controllers/ListAllUsersController";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const userRouter = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();
const leistAllUsersController = new ListAllUsersController();

userRouter.post('/create', ensureAuthenticated, ensureAdmin, createUserController.handle);
userRouter.post('/update', ensureAuthenticated, ensureAdmin, updateUserController.handle);
userRouter.post('/delete/:id', ensureAuthenticated, ensureAdmin, deleteUserController.handle);
userRouter.post("/sessions", authenticateUserController.handle);
userRouter.post("/refresh-token", refreshTokenController.handle);
userRouter.get("/", ensureAuthenticated, ensureAdmin, leistAllUsersController.handle)

export {
    userRouter
}