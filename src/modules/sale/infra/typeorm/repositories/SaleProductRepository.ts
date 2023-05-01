import { Repository } from "typeorm";
import { dataSource } from "@shared/infra/typeorm";
import { ISaleProductRepository } from "../../repositories/ISaleProductRepository";
import { SaleProduct } from "../entities/SaleProduct";
import { ISaleProductDTO } from "@modules/sale/dtos/ISaleProductDTO";

export class SaleProductRepository implements ISaleProductRepository {
    private ormRepository: Repository<SaleProduct>;

    constructor() {
      this.ormRepository = dataSource.getRepository(SaleProduct);
    }

    async create({amount, price_per_product, product_id, sale_id}: ISaleProductDTO): Promise<void> {
        const saleProduct = this.ormRepository.create({
            amount, 
            price_per_product, 
            product_id, 
            sale_id
        });

        await this.ormRepository.save(saleProduct);
    }

    async deleteById(id: string): Promise<void> {
        await this.ormRepository.delete({id});
    }

    async update(saleProduct: SaleProduct): Promise<void> {
        await this.ormRepository.save(saleProduct);
    }

    async findById(id: string): Promise<SaleProduct> {
        return await this.ormRepository.findOneBy({id});
    }

    async findBySaleId(id: string): Promise<SaleProduct[]> {
        return await this.ormRepository.findBy({sale_id: id});
    }
}