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
        const data =  await this.vehiclesRepository.findAll()

        data.sort((a, b) => {
            if(a.name.toUpperCase() < b.name.toUpperCase() ) {
                return -1;
            } 
            if (a.name.toUpperCase()  > b.name.toUpperCase() ) {
                return 1;
            }

            return 0;
        });


        return data;
    }
}