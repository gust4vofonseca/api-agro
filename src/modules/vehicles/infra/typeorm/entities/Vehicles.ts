import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('vehicles')
export class Vehicles {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column({type: "float"})
    minimum_weight: number;

    @Column({type: "float"})
    maximum_weight: number;

    @Column()
    minimum_km: number;

    @Column()
    maximum_km: number;

    @Column({type: "float"})
    price_per_km: number;

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