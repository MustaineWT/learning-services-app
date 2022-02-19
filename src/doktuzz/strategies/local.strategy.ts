import { Strategy } from 'passport-local';
import { Injectable,UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { DoktuzService } from '../doktuz.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private readonly doktuzService: DoktuzService) {
    super({
      startDateField: 'startDate', 
      endDateField: 'endDate',
    });
  }

  async getAllWithRangeDate(startDate: Date, endDate: Date) {
    const data = await this.doktuzService.getAllWithRangeDate(startDate, endDate);
    if (!data)
      throw new UnauthorizedException('Data not range information.');
    return data;
  }
  async getAllWithNameOrCompany(name: string, company: string) {
    const data = await this.doktuzService.getAllWithNameOrCompany(name, company);
    if (!data)
      throw new UnauthorizedException('Data not information because error name or company found.');
    return data;
  }
}
