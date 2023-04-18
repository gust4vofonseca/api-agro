import { inject, injectable } from "tsyringe";
import { IProductosRepository } from "../infra/repositories/IProductosRepository";

@injectable()
export class DeleteProductosService {
    constructor(
        @inject('ProductosRepository')
        private productosRepository: IProductosRepository
    ) {}


    async execute(id: string): Promise<void> {
        const productos = await this.productosRepository.findById(id);

        if(!productos) {
            return;
        }

        await this.productosRepository.deleteById(id);
    }
}