import { ListAllProductosService } from "@modules/productos/services/ListAllProductosService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListAllProductosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllProductosService = container.resolve(ListAllProductosService);

        const data = await listAllProductosService.execute()

        return response.json(data);
    }
}