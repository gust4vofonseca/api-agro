import { Repository } from "typeorm";
import { dataSource } from "@shared/infra/typeorm";

import { Sale } from "../entities/Sale";
import { ISaleRepository } from "../../repositories/ISaleRepository";
import { ISaleDTO } from "@modules/sale/dtos/ISaleDTO";

export class SaleRepository implements ISaleRepository {
    private ormRepository: Repository<Sale>;

    constructor() {
      this.ormRepository = dataSource.getRepository(Sale);
    }

    async create({freight_value,total_cost_amout, total_sale_value, total_weight, user_id, discount}: ISaleDTO): Promise<Sale> {
        const sale = this.ormRepository.create({
            freight_value,
            total_cost_amout, 
            total_sale_value, 
            total_weight, 
            user_id, 
            discount
        });

        await this.ormRepository.save(sale);

        return sale;
    }

    async deleteById(id: string): Promise<void> {
        await this.ormRepository.delete({id});
    }

    async update(sale: Sale): Promise<void> {
        await this.ormRepository.save(sale);
    }

    async findById(id: string): Promise<Sale> {
        return await this.ormRepository.findOneBy({id});
    }

    async findAll(): Promise<Sale[]> {
        return await this.ormRepository.find();
    }

    async findParmsDateAndUser(startDate: Date, endDate: Date, userId: string): Promise<Sale[]> {
        const data = await this.ormRepository.createQueryBuilder('sale')
        .where('sale.created_at BETWEEN :startDate AND :endDate', { startDate, endDate })
        .andWhere('registro.user_id = :userId', { userId })
        .getMany();

        return data;
    }

    async findParmsDate(startDate: Date, endDate: Date): Promise<Sale[]> {
        const data = await this.ormRepository.createQueryBuilder('sale')
        .where('sale.created_at BETWEEN :startDate AND :endDate', { startDate, endDate })
        .getMany();

        return data;
    }

}