import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) { }
  create(studentItem: CreateStudentDto): Promise<Student> {
    return this.studentRepository.save(studentItem);
  }

 
  findAll(): Promise<Student[]> {
    return this.studentRepository.find({
      relations:{
        scores:true
      }
    });
  }
  
  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({
      where: {
        id: id
      },
      relations:{
        scores:true
      }
    });
  }

  update(id: number, studentItem: UpdateStudentDto): Promise<Student> {
    studentItem.id = id;
    return this.studentRepository.save(studentItem);
  }

  async remove(id: number) {
    await this.studentRepository.delete(id);
  }
}
