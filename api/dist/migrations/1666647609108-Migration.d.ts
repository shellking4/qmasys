import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Migration1666647609108 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
