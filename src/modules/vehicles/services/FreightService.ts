import { inject, injectable } from "tsyringe";
import { IVehiclesRepository } from "../infra/repositories/IVehiclesRepository";
import { IProductosRepository } from "@modules/productos/infra/repositories/IProductosRepository";
import { IRequestFreightDTO } from "../dtos/IRequestFreightDTO";
import { IResponseFreightDTO } from "../dtos/IResponseFreightDTO";


@injectable()
export class FreightService {
    constructor(
        @inject('VehiclesRepository')
        private vehiclesRepository: IVehiclesRepository,

        @inject('ProductosRepository')
        private productosRepository: IProductosRepository,
      ) {}
    
    async execute({km, products}: IRequestFreightDTO): Promise<IResponseFreightDTO[]> {
        try {
            let totalSaleValue = 0;
            let totalCostAmount = 0;
            let totalWeight = 0;

            for (const prod of products) {
                const data = await this.productosRepository.findById(prod.id);

                totalSaleValue += (data.sale_value * prod.quanttityOfProduct);
                totalCostAmount += (data.cost_value * prod.quanttityOfProduct);
                totalWeight += (data.weight * prod.quanttityOfProduct);
            }

            const allVehicles = await this.vehiclesRepository.findAll();

            let vehiclesSelected: IResponseFreightDTO[] = [];

            for (const vehicle of allVehicles) {
                
                if (vehicle.minimum_weight <= totalWeight && vehicle.maximum_weight >= totalWeight) {
                    
                    if (vehicle.minimum_km <= km && vehicle.maximum_km >= km) {
                        
                        const freight = vehicle.price_per_km * km;
                        const profitValue = totalSaleValue - (totalCostAmount + freight);
                        const profitPercentage = (profitValue * 100) / totalCostAmount;

                        if(profitPercentage >= 10 && profitPercentage < 14) {
                            vehiclesSelected.push({
                                vehicles: vehicle,
                                percentage: profitPercentage,
                                level: 1,
                            })

                        } else if (profitPercentage >= 14 && profitPercentage < 17) {
                            vehiclesSelected.push({
                                vehicles: vehicle,
                                percentage: profitPercentage,
                                level: 2,
                            })

                        } else if (profitPercentage >= 17) {
                            vehiclesSelected.push({
                                vehicles: vehicle,
                                percentage: profitPercentage,
                                level: 3,
                            })
                        }
                    }
                }
            }

            vehiclesSelected.sort((a, b) => {
                if (a.percentage > b.percentage) {
                    return -1;
                }
                if(a.percentage < b.percentage) {
                    return 1;
                }
                return 0;
            })

            return vehiclesSelected;
        } catch (error) {
                console.log({error})
                return undefined
        }
    }
}