import { User } from "@modules/users/infra/typeorm/entities/User";
import { Vehicles } from "@modules/vehicles/infra/typeorm/entities/Vehicles";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Sale } from "./Sale";
import { Productos } from "@modules/productos/infra/typeorm/entities/Productos";

@Entity('sale_product')
export class SaleProduct {
    @PrimaryColumn()
    id: string;

    @Column()
    sale_id: string;

    @ManyToOne(() => Sale)
    @JoinColumn({ name: "sale_id" })
    sale: Sale;

    @Column()
    product_id: string;

    @ManyToOne(() => Productos)
    @JoinColumn({ name: "product_id" })
    product: Productos;

    @Column()
    amount: number;

    @Column({type: "float"})
    price_per_product: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}