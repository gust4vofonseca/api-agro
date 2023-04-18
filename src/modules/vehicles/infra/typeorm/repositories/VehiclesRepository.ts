import { Repository } from "typeorm";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";
import { Vehicles } from "../entities/Vehicles";
import { dataSource } from "@shared/infra/typeorm";
import { IVehiclesDTO } from "@modules/vehicles/dtos/IVehiclesDTO";

export class VehiclesRepository implements IVehiclesRepository {
    private ormRepository: Repository<Vehicles>;

    constructor() {
      this.ormRepository = dataSource.getRepository(Vehicles);
    }


    async create({maximum_km, maximum_weight, minimum_km, minimum_weight, name, price_per_km, id}: IVehiclesDTO): Promise<void> {
        const vehicles = this.ormRepository.create({
            name,
            maximum_km,
            maximum_weight,
            minimum_km,
            minimum_weight,
            price_per_km,
        });

        await this.ormRepository.save(vehicles);
    }

    async findById(id: string): Promise<Vehicles> {
        return await this.ormRepository.findOneBy({id});
    }
    
    async findAll(): Promise<Vehicles[]> {
        return await this.ormRepository.find();
    }

    async deleteById(id: string): Promise<void> {
        await this.ormRepository.delete({id});
    }

    async update(vehicles: Vehicles): Promise<void> {
        await this.ormRepository.save(vehicles);
    }

}