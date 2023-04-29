import { FreightService } from "@modules/vehicles/services/FreightService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class FreightController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            products,
            km
        } = request.body;

        console.log({km, products})

        const freightService = container.resolve(FreightService);

        const data = await freightService.execute({products, km});

        return response.json(data);
    }
}