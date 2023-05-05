import { inject, injectable } from "tsyringe";
import { ISaleRepository } from "../infra/repositories/ISaleRepository";
import { ISaleProductRepository } from "../infra/repositories/ISaleProductRepository";
import { IRequestSaletDTO } from "../dtos/IRequestFreightDTO";
import { IVehiclesRepository } from "@modules/vehicles/infra/repositories/IVehiclesRepository";
import { IProductosRepository } from "@modules/productos/infra/repositories/IProductosRepository";
import { IUserRepository } from "@modules/users/infra/repositories/IUserRepository";

@injectable()
export class CreateSaleService {
    constructor(
        @inject("SaleRepository")
        private saleRepository: ISaleRepository,

        @inject("SaleProductRepository")
        private saleProductRepository: ISaleProductRepository,

        @inject('VehiclesRepository')
        private vehiclesRepository: IVehiclesRepository,

        @inject('ProductosRepository')
        private productosRepository: IProductosRepository,

        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {}


    async execute({discount, km, products, user_id, vehicle_id}: IRequestSaletDTO): Promise<void> {
        const user = await this.userRepository.findById(user_id);

        if (!user) {
            return
        }

        const vehicle = await this.vehiclesRepository.findById(vehicle_id);

        if (!vehicle) {
            return
        }

        const freightValue = vehicle.price_per_km * km;

        let totalSaleValue = 0;
        let totalCostAmount = 0;
        let totalWeight = 0;

        for (const prod of products) {
            const data = await this.productosRepository.findById(prod.id);

            totalSaleValue += (data.sale_value * prod.quanttityOfProduct);
            totalCostAmount += (data.cost_value * prod.quanttityOfProduct);
            totalWeight += (data.weight * prod.quanttityOfProduct);
        }

        if (user.isAdmin && discount) {
            totalSaleValue -= discount;
        }


        const sale = await this.saleRepository.create({
            user_id,
            vehicle_id,
            km,
            discount,
            freight_value: freightValue,
            total_cost_amout: totalCostAmount,
            total_sale_value: totalSaleValue,
            total_weight: totalWeight,
        });

        for (const prod of products) {
            const data = await this.productosRepository.findById(prod.id);

            await this.saleProductRepository.create({
                amount: prod.quanttityOfProduct,
                price_per_product: data.sale_value,
                product_id: data.id,
                sale_id: sale.id,
            });
         }
    }
}