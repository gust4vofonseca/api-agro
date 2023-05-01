import { ISaleProductDTO } from "@modules/sale/dtos/ISaleProductDTO";
import { SaleProduct } from "../typeorm/entities/SaleProduct";

export interface ISaleProductRepository {
    create(data: ISaleProductDTO): Promise<void>;
    deleteById(id: string): Promise<void>;
    update(sale: SaleProduct): Promise<void>;
    findById(id: string): Promise<SaleProduct>;
    findBySaleId(id: string): Promise<SaleProduct[]>;
}