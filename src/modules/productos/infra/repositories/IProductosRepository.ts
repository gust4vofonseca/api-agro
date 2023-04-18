import { IProductosDTO } from "@modules/productos/dtos/IProductosDTO";
import { Productos } from "../typeorm/entities/Productos";

export interface IProductosRepository {
    create(data: IProductosDTO): Promise<void>;
    findAllProductos(): Promise<Productos[]>;
    findById(id: string): Promise<Productos>;
    deleteById(id: string): Promise<void>;
    update(productos: Productos): Promise<void>;
}