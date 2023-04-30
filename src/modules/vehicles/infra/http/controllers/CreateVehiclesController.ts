import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVehiclesService } from "@modules/vehicles/services/CreateVehiclesService";

export class CreateVehiclesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name, 
            price_per_km,
            minimum_km, 
            maximum_km, 
            minimum_weight, 
            maximum_weight, 
        } = request.body;

        const createVehiclesService = container.resolve(CreateVehiclesService);

        await createVehiclesService.execute({
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