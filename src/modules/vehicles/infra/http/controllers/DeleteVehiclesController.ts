import { DeleteVehiclesService } from "@modules/vehicles/services/DeleteVehiclesService";
import { Request, Response } from "express";
import { container } from "tsyringe";


export class DeleteVehiclesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id
        } = request.params;

        const deleteVehiclesService = container.resolve(DeleteVehiclesService);

        await deleteVehiclesService.execute(
            id
        );

        return response.send();
    }
}