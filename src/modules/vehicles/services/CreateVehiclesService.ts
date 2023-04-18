import { inject, injectable } from "tsyringe";
import { IVehiclesRepository } from "../infra/repositories/IVehiclesRepository";
import { IVehiclesDTO } from "../dtos/IVehiclesDTO";

@injectable()
export class CreateVehiclesService {
    constructor(
        @inject('VehiclesRepository')
        private vehiclesRepository: IVehiclesRepository,
      ) {}

    async execute({maximum_km, maximum_weight, minimum_km, minimum_weight, name, price_per_km}: IVehiclesDTO): Promise<void> {
        await this.vehiclesRepository.create({
            maximum_km, 
            maximum_weight, 
            minimum_km, 
            minimum_weight, 
            name, 
            price_per_km
        });
    }
}