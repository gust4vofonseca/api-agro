import { Repository } from "typeorm";
import { IProductosRepository } from "../../repositories/IProductosRepository";
import { dataSource } from "@shared/infra/typeorm";
import { Productos } from "../entities/Productos";
import { IProductosDTO } from "@modules/productos/dtos/IProductosDTO";

export class ProductosRepository implements IProductosRepository {
    private ormRepository: Repository<Productos>;

    constructor() {
      this.ormRepository = dataSource.getRepository(Productos);
    }

    async create({cost_value, name, sale_value, weight, id}: IProductosDTO): Promise<void> {
        const productos = this.ormRepository.create({
            cost_value,
            name,
            sale_value,
            weight,
            id,
        });

        await this.ormRepository.save(productos);
    }

    async findAllProductos(): Promise<Productos[]> {
        return await this.ormRepository.find();
    }

    async findById(id: string): Promise<Productos> {
        return await this.ormRepository.findOneBy({id});
    }
}