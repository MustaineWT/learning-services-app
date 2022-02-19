import { 
   //Body,
   Controller,
   Param,
   Get,
} from '@nestjs/common';
import { DoktuzService } from './doktuz.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Learning Routes')
@Controller('doktuzz')
export class DoktuzController {
  constructor(private readonly doktuzService: DoktuzService) {}
  @Get()
  async getAll() {
    const data = await this.doktuzService.getAll();
    return {
      message: 'Get all Doktuz',
      data,
    }
  }
  @Get('/allWithRangeDate/:startDate&:endDate')
  async getAllWithRangeDate(@Param ('startDate') startDate: string, @Param ('endDate') endDate: string) {
    const data = await this.doktuzService.getAllWithRangeDate(startDate,endDate);
    return {
      message: 'Get all Doktuz with Range Date',
      data,
    }
  }
  @Get('/allWithNameOrCompany/:name&:company')
  async getAllWithNameOrCompany(@Param ('name') name: string, @Param ('company') company: string) {
    const data = await this.doktuzService.getAllWithNameOrCompany(name,company);
    return {
      message: 'Get all Doktuz with name or company',
      data,
    }
  }
}
