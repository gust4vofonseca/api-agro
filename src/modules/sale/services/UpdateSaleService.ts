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
}