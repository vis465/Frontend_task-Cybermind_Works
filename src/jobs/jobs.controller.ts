import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { Job } from './jobs.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() jobData: Partial<Job>) {
    return this.jobsService.create(jobData);
  }

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Job>) {
    return this.jobsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobsService.remove(+id);
  }
}
