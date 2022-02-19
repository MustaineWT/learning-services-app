import { 
   //Body,
   Controller,
   //Delete,
   Get,
} from '@nestjs/common';
//import { GetDoktuzWithRangeDateTimeDto } from './dtos';
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
}
