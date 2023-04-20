import { UpdateUserService } from "@modules/users/services/UpdateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            email,
            password,
            id
        } = request.body;

        const updateUserService = container.resolve(UpdateUserService);

        await updateUserService.execute({
            name,
            email,
            password,
            id
        })

        return response.send();
    }
}