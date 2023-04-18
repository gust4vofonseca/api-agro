import { inject, injectable } from "tsyringe";
import { IVehiclesRepository } from "../infra/repositories/IVehiclesRepository";
import { Vehicles } from "../infra/typeorm/entities/Vehicles";

@injectable()
export class ListAllVehiclesService {
    constructor(
        @inject('VehiclesRepository')
        private vehiclesRepository: IVehiclesRepository,
      ) {}

    async execute(): Promise<Vehicles[]> {
        return await this.vehiclesRepository.findAll()
    }
}