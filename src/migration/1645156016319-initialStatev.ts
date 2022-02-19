import {MigrationInterface, QueryRunner} from "typeorm";

export class initialStatev1645156016319 implements MigrationInterface {
    name = 'initialStatev1645156016319'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `doktuzz` (`codigo` varchar(20) NOT NULL, `fecha` timestamp NOT NULL, `empresa` varchar(255) NULL, `subcontrata` varchar(255) NULL, `proyecto` varchar(128) NULL, `t_exam` varchar(128) NULL, `paciente` varchar(255) NULL, `certificado` varchar(2000) NULL, `certificado_downloaded` int NOT NULL, `imp` varchar(2000) NULL, `imp_downloaded` int NULL, PRIMARY KEY (`codigo`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `doktuzz`");
    }

}
