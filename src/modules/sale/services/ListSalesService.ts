import { inject, injectable } from "tsyringe";
import { ISaleRepository } from "../infra/repositories/ISaleRepository";
import { ISaleProductRepository } from "../infra/repositories/ISaleProductRepository";
import { Sale } from "../infra/typeorm/entities/Sale";

@injectable()
export class CreateSaleService {
    constructor(
        @inject("SaleRepository")
        private saleRepository: ISaleRepository,

        @inject("SaleProductRepository")
        private saleProductRepository: ISaleProductRepository
    ) {}

    async execute(startDate: string, endDate: string, user_id?: string): Promise<Sale[]> {
        let sales: Sale[];
        const dateInite = new Date(startDate);
        const DateFinal = new Date(endDate);

        if (user_id) {
            sales = await this.saleRepository.findParmsDateAndUser(dateInite, DateFinal, user_id);
        } else {
            sales = await this.saleRepository.findParmsDate(dateInite, DateFinal);
        }


        return sales;
    }
}