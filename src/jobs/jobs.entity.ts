import { Entity, PrimaryGeneratedColumn, Column, IntegerType } from 'typeorm';
@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string; 

  @Column()
  title: string;

  @Column({ nullable: true })
  deadline: Date;

  @Column({ nullable: true })
  description: string; 

  @Column()
  location: string;

  @Column()
  type: string;
  @Column()
  Minexp: string;
  @Column()
  Maxexp: string;

  @Column({ nullable: true })
  salaryMin: number;

  @Column({ nullable: true })
  salaryMax: number;
}
