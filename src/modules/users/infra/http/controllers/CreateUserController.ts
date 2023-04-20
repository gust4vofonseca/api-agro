import { CreateUserService } from "@modules/users/services/CreateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            email,
            password
        } = request.body;

        const createUserService = container.resolve(CreateUserService);

        await createUserService.execute({
            name,
            email,
            password
        })

        return response.send();
    }
}