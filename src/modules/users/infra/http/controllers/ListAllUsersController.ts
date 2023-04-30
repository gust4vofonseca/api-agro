import { ListAllUsersService } from "@modules/users/services/ListAllUsersService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListAllUsersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllUserService = container.resolve(ListAllUsersService);

        const data = await listAllUserService.execute();

        return response.json(data);
    }
}