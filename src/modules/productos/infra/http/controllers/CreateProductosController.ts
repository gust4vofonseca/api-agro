import { CreateProductosService } from "@modules/productos/services/CreateProductosService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateProductosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            cost_value, 
            name, 
            sale_value, 
            weight
        } = request.body;
        
        const createProductosService = container.resolve(CreateProductosService);

        await createProductosService.execute({
            cost_value, 
            name, 
            sale_value, 
            weight
        })

        return response.send();
    }
}