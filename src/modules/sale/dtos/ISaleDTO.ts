export interface ISaleDTO {
    id?: string;
    user_id: string;
    vehicle_id?: string;
    total_sale_value: number;
    total_cost_amout: number;
    freight_value: number;
    total_weight: number;
    discount?: number;
    km: number;
}