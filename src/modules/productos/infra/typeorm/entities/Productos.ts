import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('productos')
export class Productos {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column({type: "float"})
    weight: number;

    @Column({type: "float"})
    cost_value: number;

    @Column({type: "float"})
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