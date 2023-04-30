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
        const data = await this.productosRepository.findAllProductos();

        data.sort((a, b) => {
            if(a.name.toUpperCase() < b.name.toUpperCase() ) {
                return -1;
            } 
            if (a.name.toUpperCase()  > b.name.toUpperCase() ) {
                return 1;
            }

            return 0;
        });

        return data;
    }
}