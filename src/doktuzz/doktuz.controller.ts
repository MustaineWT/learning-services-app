import { 
   //Body,
   Controller,
   Param,
   Get,
} from '@nestjs/common';
import { DoktuzService } from './doktuz.service';
import { ApiTags } from '@nestjs/swagger';

function zfill(number, width) {
  const numberOutput = Math.abs(number); /* Valor absoluto del número */
  const length = number.toString().length; /* Largo del número */ 
  const zero = "0"; /* String de cero */  
  
  if (width <= length) {
      if (number < 0) {
           return ("-" + numberOutput.toString()); 
      } else {
           return numberOutput.toString(); 
      }
  } else {
      if (number < 0) {
          return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
      } else {
          return ((zero.repeat(width - length)) + numberOutput.toString()); 
      }
  }
}
@ApiTags('Learning Routes')
@Controller('doktuzz')
export class DoktuzController {
  constructor(private readonly doktuzService: DoktuzService) {}
  @Get()
  async getAll() {
    const dataf = await this.doktuzService.getAll();
    const data=[];
    for (let i = 0; i < dataf.length; i++) {      
      data.push({
        codigo:dataf[i].codigo,
        fecha: [
          dataf[i].fecha.getDate(),
          zfill((dataf[i].fecha.getMonth()+1),2),
          dataf[i].fecha.getFullYear()].join('-')+' '+
         [dataf[i].fecha.getHours(),
          dataf[i].fecha.getMinutes(),
          dataf[i].fecha.getSeconds()].join(':'),
         empresa: dataf[i].empresa,
         subcontrata:  dataf[i].subcontrata,
         proyecto: dataf[i].proyecto,
         tExam: dataf[i].t_exam,
         paciente: dataf[i].paciente,
         certificado:dataf[i].certificado,
         certificadoDownloaded:  dataf[i].certificado_downloaded,
         imp:dataf[i].imp,
         impDownloaded: dataf[i].imp_downloaded,
      });
    }   
      
    return {
      message: 'Get all Doktuz',
      data,
    }
  }
  @Get('/allWithRangeDate/:startDate&:endDate')
  async getAllWithRangeDate(@Param ('startDate') startDate: string, @Param ('endDate') endDate: string) {
    const dataf = await this.doktuzService.getAllWithRangeDate(startDate,endDate);
    const data=[];
    for (let i = 0; i < dataf.length; i++) {      
      data.push({
        codigo:dataf[i].codigo,
        fecha: [
          dataf[i].fecha.getDate(),
          zfill((dataf[i].fecha.getMonth()+1),2),
          dataf[i].fecha.getFullYear()].join('-')+' '+
         [dataf[i].fecha.getHours(),
          dataf[i].fecha.getMinutes(),
          dataf[i].fecha.getSeconds()].join(':'),
         empresa: dataf[i].empresa,
         subcontrata:  dataf[i].subcontrata,
         proyecto: dataf[i].proyecto,
         tExam: dataf[i].t_exam,
         paciente: dataf[i].paciente,
         certificado:dataf[i].certificado,
         certificadoDownloaded:  dataf[i].certificado_downloaded,
         imp:dataf[i].imp,
         impDownloaded: dataf[i].imp_downloaded,
      });
    }   
    return {
      message: 'Get all Doktuz with Range Date',
      data,
    }
  }
  @Get('/allWithNameOrCompany/:name&:company')
  async getAllWithNameOrCompany(@Param ('name') name: string, @Param ('company') company: string) {
    const dataf = await this.doktuzService.getAllWithNameOrCompany(name,company);
    const data=[];
    for (let i = 0; i < dataf.length; i++) {      
      data.push({
        codigo:dataf[i].codigo,
        fecha: [
          dataf[i].fecha.getDate(),
          zfill((dataf[i].fecha.getMonth()+1),2),
          dataf[i].fecha.getFullYear()].join('-')+' '+
         [dataf[i].fecha.getHours(),
          dataf[i].fecha.getMinutes(),
          dataf[i].fecha.getSeconds()].join(':'),
         empresa: dataf[i].empresa,
         subcontrata:  dataf[i].subcontrata,
         proyecto: dataf[i].proyecto,
         tExam: dataf[i].t_exam,
         paciente: dataf[i].paciente,
         certificado:dataf[i].certificado,
         certificadoDownloaded:  dataf[i].certificado_downloaded,
         imp:dataf[i].imp,
         impDownloaded: dataf[i].imp_downloaded,
      });
    }   
    return {
      message: 'Get all Doktuz with name or company',
      data,
    }
  }
}
