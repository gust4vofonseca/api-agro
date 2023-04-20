import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { UpdateUserController } from "../controllers/UpdateUserControlle";
import { DeletePUserController } from "../controllers/DeleteUserController";

const userRouter = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeletePUserController();

userRouter.post('/create', createUserController.handle);
userRouter.post('/update', updateUserController.handle);
userRouter.post('/delete/:id', deleteUserController.handle);

export {
    userRouter
}