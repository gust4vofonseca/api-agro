import { DeleteProductosService } from "@modules/productos/services/DeleteProductosService";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteProductosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id
        } = request.params;

        const deleteProductosService = container.resolve(DeleteProductosService);

        await deleteProductosService.execute(
            id
        );

        return response.send();
    }
}