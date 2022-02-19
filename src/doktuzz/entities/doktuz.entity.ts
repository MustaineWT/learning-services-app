import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('doktuzz')
export class Doktuz {
    @PrimaryColumn({ type: 'varchar', length: 20 , nullable: false })
    codigo: string;

    @Column({ type: 'timestamp' })
    fecha: Date;

    @Column({ type: 'varchar', length: 255, nullable: true  })
    empresa: string;

    @Column({ type: 'varchar', length: 255, nullable: true  })
    subcontrata: string;

    @Column({ type: 'varchar', length: 128, nullable: true  })
    proyecto: string;

    @Column({ type: 'varchar', length: 128, nullable: true  })
    t_exam: string;

    @Column({ type: 'varchar', length: 255, nullable: true  })
    paciente: string;

    @Column({ type: 'varchar', length: 2000 , nullable: true })
    certificado: string;

    @Column({ type: 'int', nullable: true})
    certificado_downloaded: number;

    @Column({ type: 'varchar', length: 2000 , nullable: true })
    imp: string;

    @Column({ type: 'int', nullable: true })
    imp_downloaded: number;
}
