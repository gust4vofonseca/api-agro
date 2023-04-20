import { DeleteUserService } from "@modules/users/services/DeleteUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeletePUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id
        } = request.params;

        const deleteUserService = container.resolve(DeleteUserService);

        await deleteUserService.execute(
            id
        );

        return response.send();
    }
}