import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsModule } from './jobs/jobs.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'crud_demo',
      autoLoadEntities: true,
      synchronize: true,
    }),
    JobsModule,
  ],
})
export class AppModule {}
