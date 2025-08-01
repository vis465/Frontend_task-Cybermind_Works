import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './jobs.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  create(jobData: Partial<Job>): Promise<Job> {
    const job = this.jobRepository.create(jobData);
    return this.jobRepository.save(job);
  }

  findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  async findOne(id: number): Promise<Job> {
    const job = await this.jobRepository.findOne({ where: { id } });
    if (!job) throw new NotFoundException('Job not found');
    return job;
  }

  async update(id: number, data: Partial<Job>): Promise<Job> {
    const job = await this.findOne(id);
    Object.assign(job, data);
    return this.jobRepository.save(job);
  }

  async remove(id: number): Promise<void> {
    const job = await this.findOne(id);
    await this.jobRepository.remove(job);
  }
}
