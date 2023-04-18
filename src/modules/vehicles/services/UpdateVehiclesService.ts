import { inject, injectable } from "tsyringe";
import { IVehiclesRepository } from "../infra/repositories/IVehiclesRepository";
import { IVehiclesDTO } from "../dtos/IVehiclesDTO";

@injectable()
export class UpdateVehiclesService {
    constructor(
        @inject('VehiclesRepository')
        private vehiclesRepository: IVehiclesRepository,
      ) {}

    async execute({maximum_km, maximum_weight, minimum_km, minimum_weight, name, price_per_km, id}: IVehiclesDTO): Promise<void> {
        const vehicles = await this.vehiclesRepository.findById(id);

        if (!vehicles) {
            return;
        }

        vehicles.maximum_km = maximum_km;
        vehicles.maximum_weight = maximum_weight;
        vehicles.minimum_km = minimum_km;
        vehicles.minimum_weight = minimum_weight;
        vehicles.name = name;
        vehicles.price_per_km = price_per_km;

        await this.vehiclesRepository.update(vehicles);
    }
}