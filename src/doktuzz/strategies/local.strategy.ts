import { Injectable,UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy {
  constructor() {
    ({
      startDateField: 'startDate', 
      endDateField: 'endDate',
    });
  }

  async getAllWithRangeDate(startDate: Date, endDate: Date) {
    const data = await this.getAllWithRangeDate(startDate, endDate);
    if (!data)
      throw new UnauthorizedException('Data not range information.');
    return data;
  }
  async getAllWithNameOrCompany(name: string, company: string) {
    const data = await this.getAllWithNameOrCompany(name, company);
    if (!data)
      throw new UnauthorizedException('Data not information because error name or company found.');
    return data;
  }
}
