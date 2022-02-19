import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DoktuzController } from './doktuz.controller';
import { DoktuzService } from './doktuz.service';
import { Doktuz } from './entities/doktuz.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Doktuz]),],
    
  controllers: [DoktuzController],
  providers: [DoktuzService],
  exports: [DoktuzService],
})
export class DoktuzModule {}
