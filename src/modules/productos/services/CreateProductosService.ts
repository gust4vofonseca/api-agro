import { inject, injectable } from "tsyringe";
import { IProductosRepository } from "../infra/repositories/IProductosRepository";
import { IProductosDTO } from "../dtos/IProductosDTO";

@injectable()
export class CreateProductosService {
    constructor(
        @inject('ProductosRepository')
        private productosRepository: IProductosRepository
    ) {}


    async execute({cost_value, name, sale_value, weight}: IProductosDTO): Promise<void> {
        await this.productosRepository.create({
            cost_value, 
            name, 
            sale_value, 
            weight
        });
    }
}