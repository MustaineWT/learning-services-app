import { PartialType } from '@nestjs/mapped-types';
import { GetDoktuzDto } from './get-doktuz.dto';

export class GetDoktuzWithNameOrCompanyDto extends PartialType(GetDoktuzDto) {}
