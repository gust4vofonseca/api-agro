interface IProduct {
    id: string;
    quanttityOfProduct: number;
}

export interface IRequestSaletDTO {
    products: IProduct[];
    km: number;
    user_id: string;
    vehicle_id: string;
    discount: number;
}