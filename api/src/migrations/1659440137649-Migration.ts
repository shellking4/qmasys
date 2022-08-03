import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1659440137649 implements MigrationInterface {
    name = 'Migration1659440137649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`constantes\` (\`creator_id\` int NULL, \`editor_id\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`value\` varchar(255) NOT NULL, \`visibilite\` varchar(255) NOT NULL DEFAULT 'PUBLIC', \`status\` tinyint NOT NULL DEFAULT 1, \`description\` varchar(255) NULL, UNIQUE INDEX \`IDX_3c747acb5daf17713889fc9cbb\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`creator_id\` int NULL, \`editor_id\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`firstname\` varchar(255) NULL, \`lastname\` varchar(255) NULL, \`office_name\` varchar(255) NULL, \`gender\` varchar(255) NULL, \`password\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, \`birth_date\` datetime NULL, \`phone\` varchar(255) NULL, \`code\` varchar(255) NOT NULL, \`profile_image\` varchar(255) NULL, \`roles\` enum ('INFORMATICIEN', 'ADMIN', 'AGENT', 'USER') NOT NULL DEFAULT 'AGENT', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tickets\` (\`creator_id\` int NULL, \`editor_id\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`status\` varchar(255) NOT NULL DEFAULT 'WAITING', \`receive_date\` datetime NULL, \`finish_date\` datetime NULL, \`order_nber\` int NOT NULL DEFAULT '1', \`code\` varchar(255) NOT NULL, \`user_id\` int NULL, UNIQUE INDEX \`IDX_c6e20a830c0f8b571abd331b77\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`tickets\` ADD CONSTRAINT \`FK_2e445270177206a97921e461710\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tickets\` DROP FOREIGN KEY \`FK_2e445270177206a97921e461710\``);
        await queryRunner.query(`DROP INDEX \`IDX_c6e20a830c0f8b571abd331b77\` ON \`tickets\``);
        await queryRunner.query(`DROP TABLE \`tickets\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_3c747acb5daf17713889fc9cbb\` ON \`constantes\``);
        await queryRunner.query(`DROP TABLE \`constantes\``);
    }

}
