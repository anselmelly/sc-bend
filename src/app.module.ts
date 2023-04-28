import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entities/student.entity';
import { Teacher } from './teachers/entities/teacher.entity';
import { ExamsModule } from './exams/exams.module';
import { ScoresModule } from './scores/scores.module';
import { Exam } from './exams/entities/exam.entity';
import { Score } from './scores/entities/score.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'ansel',
    password: '&#x0900xdba',
    database: 'school-project',
    entities: [Student,Teacher,Exam,Score],
    synchronize: true,
    autoLoadEntities: true
  }), StudentsModule, TeachersModule, ExamsModule, ScoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}
