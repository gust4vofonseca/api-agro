import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateVehiclesService } from "@modules/vehicles/services/UpdateVehiclesService";

export class UpdateVehiclesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            maximum_km, 
            maximum_weight, 
            minimum_km, 
            minimum_weight, 
            name, 
            price_per_km
        } = request.body;

        const updateVehiclesService = container.resolve(UpdateVehiclesService);

        await updateVehiclesService.execute({
            id,
            maximum_km, 
            maximum_weight, 
            minimum_km, 
            minimum_weight, 
            name, 
            price_per_km
        });

        return response.send();
    }
}