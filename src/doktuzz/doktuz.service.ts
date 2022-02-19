import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Doktuz } from './entities/doktuz.entity';

@Injectable()
export class DoktuzService {
    constructor(
        @InjectRepository(Doktuz)
        private readonly doktuzRepository: Repository<Doktuz>
    ) { }
    async getAll(): Promise<Doktuz[]> {
        return await this.doktuzRepository.find();
    }
    async getAllWithRangeDate(startDate: Date, endDate: Date): Promise<Doktuz[]> {
        return await this.doktuzRepository.find()    
        .then(doktuz => doktuz.filter(d => d.fecha >= startDate && d.fecha <= endDate));
    }
    async getAllWithNameOrCompany(name: string, company: string): Promise<Doktuz[]> {
        return await this.doktuzRepository.find()    
        .then(doktuz => doktuz.filter(d => d.paciente === name || d.empresa === company));
    }
}
