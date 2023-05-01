import { ISaleDTO } from "@modules/sale/dtos/ISaleDTO";
import { Sale } from "../typeorm/entities/Sale";


export interface ISaleRepository {
    create(data: ISaleDTO): Promise<void>;
    deleteById(id: string): Promise<void>;
    update(sale: Sale): Promise<void>;
    findById(id: string): Promise<Sale>;
    findAll(): Promise<Sale[]>;
    findParmsDateAndUser(startDate: Date, endDate: Date, userId: string): Promise<Sale[]>;
    findParmsDate(startDate: Date, endDate: Date): Promise<Sale[]>;
}