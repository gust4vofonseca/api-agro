import { UpdateProductosService } from "@modules/productos/services/UpdateProductosService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateProductosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            cost_value, 
            id, 
            name, 
            sale_value, 
            weight
        } = request.body;

        const updateProductosService = container.resolve(UpdateProductosService);

        await updateProductosService.execute({
            cost_value, 
            id, 
            name, 
            sale_value, 
            weight
        })

        return response.send();
    }
}