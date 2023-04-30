import { DeleteUserService } from "@modules/users/services/DeleteUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {
                id
            } = request.params;
    
            console.log({id})
    
            const deleteUserService = container.resolve(DeleteUserService);
    
            await deleteUserService.execute(
                id
            );
    
            return response.send();
        } catch (error) {
            console.log({error})
        }

    }
}