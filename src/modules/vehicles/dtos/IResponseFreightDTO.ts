import { IVehiclesDTO } from "./IVehiclesDTO";

export interface IResponseFreightDTO {
    vehicles: IVehiclesDTO;
    percentage: number;
    level: number;
}