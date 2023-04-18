import { IVehiclesDTO } from "@modules/vehicles/dtos/IVehiclesDTO";
import { Vehicles } from "../typeorm/entities/Vehicles";

export interface IVehiclesRepository {
    create(data: IVehiclesDTO): Promise<void>;
    findById(id: string): Promise<Vehicles>;
    findAll(): Promise<Vehicles[]>;
    deleteById(id: string): Promise<void>;
    update(vehicles: Vehicles): Promise<void>;
}