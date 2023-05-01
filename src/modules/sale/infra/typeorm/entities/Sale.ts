import { User } from "@modules/users/infra/typeorm/entities/User";
import { Vehicles } from "@modules/vehicles/infra/typeorm/entities/Vehicles";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity('sale')
export class Sale {
    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({ name: 'vehicle_id', nullable: true, default: null })
    vehicle_id: string;

    @ManyToOne(() => Vehicles)
    @JoinColumn({ name: "vehicle_id" })
    vehicle: Vehicles;

    @Column({type: "float"})
    total_sale_value: number;

    @Column({type: "float"})
    total_cost_amout: number;

    @Column({type: "float"})
    freight_value: number;

    @Column({type: "float"})
    total_weight: number;

    @Column({type: "float"})
    discount: number;

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