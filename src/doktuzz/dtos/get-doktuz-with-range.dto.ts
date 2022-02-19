import { PartialType } from '@nestjs/mapped-types';
import { GetDoktuzDto } from './get-doktuz.dto';

export class GetDoktuzWithRangeDateDto extends PartialType(GetDoktuzDto) {}
