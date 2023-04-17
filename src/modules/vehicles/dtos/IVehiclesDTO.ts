export interface IVehiclesDTO {
    name: string;
    minimum_weight: number;
    maximum_weight: number;
    minimum_km: number;
    maximum_km: number;
    price_per_km: number;
    id?: string;
}