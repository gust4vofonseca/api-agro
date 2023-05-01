import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableSales1682965213822 implements MigrationInterface {
    name = 'AlterTableSales1682965213822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_c5c19a76df37178428a488b8607"`);
        await queryRunner.query(`ALTER TABLE "sale" ALTER COLUMN "vehicle_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_c5c19a76df37178428a488b8607" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP CONSTRAINT "FK_c5c19a76df37178428a488b8607"`);
        await queryRunner.query(`ALTER TABLE "sale" ALTER COLUMN "vehicle_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sale" ADD CONSTRAINT "FK_c5c19a76df37178428a488b8607" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
