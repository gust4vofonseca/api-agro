import { inject, injectable } from "tsyringe";
import { IProductosRepository } from "../infra/repositories/IProductosRepository";
import { Productos } from "../infra/typeorm/entities/Productos";

@injectable()
export class ListAllProductosService {
    constructor(
        @inject('ProductosRepository')
        private productosRepository: IProductosRepository
    ) {}


    async execute(): Promise<Productos[]> {
        return await this.productosRepository.findAllProductos();
    }
}