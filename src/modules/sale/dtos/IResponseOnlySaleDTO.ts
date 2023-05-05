import { ISaleDTO } from "./ISaleDTO";
import { ISaleProductDTO } from "./ISaleProductDTO";

export interface IResponseOnySaleDTO {
    sale: ISaleDTO;
    saleProduct: ISaleProductDTO[];
}