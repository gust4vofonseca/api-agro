import { AuthenticateUserService } from "@modules/users/services/AuthenticateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";


export class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        console.log({ email, password })

        const authenticateUserService= container.resolve(
            AuthenticateUserService
        );

        const token = await authenticateUserService.execute({
            email,
            password,
        });

        return response.json(token);
    }
}

