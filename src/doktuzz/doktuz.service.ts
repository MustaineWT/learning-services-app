import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Doktuz } from './entities/doktuz.entity';

@Injectable()
export class DoktuzService {
    constructor(
        @InjectRepository(Doktuz)
        private readonly doktuzRepository: Repository<Doktuz>        
    ) {}
    async getAll():Promise<Doktuz[]>{
        return await this.doktuzRepository.find();
    }
}
