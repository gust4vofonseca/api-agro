import { IVehiclesDTO } from "./IVehiclesDTO";

export interface IVehiclesFreigth {
    vehicles: IVehiclesDTO;
    percentage: number;
    level: number;
}

export interface IResponseFreightDTO {
    vehicles: IVehiclesFreigth[];
    totalSaleValue: number;
    totalWeight: number;
}