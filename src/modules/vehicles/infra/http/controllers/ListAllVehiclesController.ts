import { ListAllVehiclesService } from "@modules/vehicles/services/ListAllVehiclesService";
import { Request, Response } from "express";
import { container } from "tsyringe";


export class ListAllVehiclesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllVehiclesService = container.resolve(ListAllVehiclesService);

        const data = await listAllVehiclesService.execute();

        return response.json(data);
    }
}