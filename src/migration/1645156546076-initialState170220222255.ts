import {MigrationInterface, QueryRunner} from "typeorm";

export class initialState1702202222551645156546076 implements MigrationInterface {
    name = 'initialState1702202222551645156546076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `doktuzz` CHANGE `fecha` `fecha` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `doktuzz` CHANGE `certificado_downloaded` `certificado_downloaded` int NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `doktuzz` CHANGE `certificado_downloaded` `certificado_downloaded` int NOT NULL");
        await queryRunner.query("ALTER TABLE `doktuzz` CHANGE `fecha` `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP");
    }

}
