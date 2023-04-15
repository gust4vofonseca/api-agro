import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('Productos')
export class Productos {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    weight: number;

    @Column()
    cost_value: number;

    @Column()
    sale_value: number;

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