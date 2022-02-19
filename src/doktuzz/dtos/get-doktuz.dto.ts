import { IsDate, IsInt, IsString } from "class-validator";

export class GetDoktuzDto {
  @IsString()
  codigo: string;
  @IsDate()
  fecha: Date;
  @IsString()
  empresa: string;
  @IsString()
  subcontrata: string;
  @IsString()
  proyecto: string;
  @IsString()
  t_exam: string;
  @IsString()
  paciente: string;
  @IsString()
  certificado: string;
  @IsInt()
  certificado_downloaded: number;
  @IsInt()
  imp: string;
  @IsInt()
  imp_downloaded: string;
}
