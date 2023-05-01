import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablesSales1682961168315 implements MigrationInterface {
    name = 'CreateTablesSales1682961168315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sale" ("id" character varying NOT NULL, "user_id" character varying NOT NULL, "vehicle_id" character varying NOT NULL, "total_sale_value" double precision NOT NULL, "total_cost_amout" double precision NOT NULL, "freight_value" double precision NOT NULL, "total_weight" double precision NOT NULL, "discount" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d03891c457cbcd22974732b5de2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sale_product" ("id" character varying NOT NULL, "sale_id" character varying NOT NULL, "product_id" character varying NOT NULL, "amount" integer NOT NULL, "price_per_product" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4c90923fcc89bf8eeecd181fffc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_a3f82cec1dac6638fba3e732530" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_c5c19a76df37178428a488b8607" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_product" ADD CONSTRAINT "FK_3728e960531905422a610d55cd8" FOREIGN KEY ("sale_id") REFERENCES "sale"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sale_product" ADD CONSTRAINT "FK_dfe6c76dfadc88e44119f33303f" FOREIGN KEY ("product_id") REFERENCES "productos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale_product" DROP CONSTRAINT "FK_dfe6c76dfadc88e44119f33303f"`);
        await queryRunner.query(`ALTER TABLE "sale_product" DROP CONSTRAINT "FK_3728e960531905422a610d55cd8"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_c5c19a76df37178428a488b8607"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_a3f82cec1dac6638fba3e732530"`);
        await queryRunner.query(`DROP TABLE "sale_product"`);
        await queryRunner.query(`DROP TABLE "sale"`);
    }

}
