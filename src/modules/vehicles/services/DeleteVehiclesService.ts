import { inject, injectable } from "tsyringe";
import { IVehiclesRepository } from "../infra/repositories/IVehiclesRepository";

@injectable()
export class DeleteVehiclesService {
    constructor(
        @inject('VehiclesRepository')
        private vehiclesRepository: IVehiclesRepository,
      ) {}

    async execute(id: string): Promise<void> {
        const vehicles = await this.vehiclesRepository.findById(id);

        if (!vehicles) {
            return;
        }

        await this.vehiclesRepository.deleteById(id);
    }
}