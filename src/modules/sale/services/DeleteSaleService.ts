import { inject, injectable } from "tsyringe";
import { ISaleRepository } from "../infra/repositories/ISaleRepository";
import { ISaleProductRepository } from "../infra/repositories/ISaleProductRepository";

@injectable()
export class CreateSaleService {
    constructor(
        @inject("SaleRepository")
        private saleRepository: ISaleRepository,

        @inject("SaleProductRepository")
        private saleProductRepository: ISaleProductRepository
    ) {}

    async execute(id: string): Promise<void> {
        const sale = await this.saleRepository.findById(id);

        if (!sale) {
            return;
        }

        const saleProducts = await this.saleProductRepository.findBySaleId(sale.id);

        for (const product of saleProducts) {
            await this.saleProductRepository.deleteById(product.id);
        }

        await this.saleRepository.deleteById(sale.id);
     }
}