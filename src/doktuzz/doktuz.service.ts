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
    async getAll() {
        return await this.doktuzRepository.find();
    }
    async getAllWithRangeDate(startDate: string, endDate: string): Promise<Doktuz[]> {
        console.log(startDate, endDate);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return await this.doktuzRepository.find().then(doktuz => doktuz.filter(d => d.fecha >= start && d.fecha <= end));
    }
    async getAllWithNameOrCompany(name: string, company: string): Promise<Doktuz[]> {
        return await this.doktuzRepository.find()    
        .then(doktuz => doktuz.filter(d => d.paciente === name || d.empresa === company));
    }
}
