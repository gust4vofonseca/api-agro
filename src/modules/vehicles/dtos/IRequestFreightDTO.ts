interface IProduct {
    id: string;
    quanttityOfProduct: number;
}

export interface IRequestFreightDTO {
    products: IProduct[];
    km: number;
}