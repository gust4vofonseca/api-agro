import { inject, injectable } from "tsyringe";
import { ISaleRepository } from "../infra/repositories/ISaleRepository";
import { ISaleProductRepository } from "../infra/repositories/ISaleProductRepository";
import { IResponseOnySaleDTO } from "../dtos/IResponseOnlySaleDTO";

@injectable()
export class CreateSaleService {
    constructor(
        @inject("SaleRepository")
        private saleRepository: ISaleRepository,

        @inject("SaleProductRepository")
        private saleProductRepository: ISaleProductRepository
    ) {}


    async execute(id: string): Promise<IResponseOnySaleDTO> {
        const sale = await this.saleRepository.findById(id);
        const saleProduct = await this.saleProductRepository.findBySaleId(id);


        return { sale, saleProduct }
    }
}