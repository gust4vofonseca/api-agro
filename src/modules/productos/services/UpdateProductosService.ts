import { inject, injectable } from "tsyringe";
import { IProductosRepository } from "../infra/repositories/IProductosRepository";
import { IProductosDTO } from "../dtos/IProductosDTO";

@injectable()
export class UpdateProductosService {
    constructor(
        @inject('ProductosRepository')
        private productosRepository: IProductosRepository
    ) {}


    async execute({cost_value, id, name, sale_value, weight}: IProductosDTO): Promise<void> {
        const productos = await this.productosRepository.findById(id);

        if (!productos) {
            return;
        }

        productos.cost_value = cost_value;
        productos.name = name;
        productos.sale_value = sale_value;
        productos.weight = weight;

        await this.productosRepository.update(productos);
    }
}