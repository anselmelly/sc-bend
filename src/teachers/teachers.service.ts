import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersService {
  constructor(@InjectRepository(Teacher) private teacherServiceRepository: Repository<Teacher>) { }
  create(teacherItem: CreateTeacherDto): Promise<Teacher> {

    return this.teacherServiceRepository.save(teacherItem);
  }

  findAll(): Promise<Teacher[]> {
    return this.teacherServiceRepository.find();
  }

  findOne(id: number): Promise<Teacher> {
    return this.teacherServiceRepository.findOneBy({ id });
  }

  update(id: number, teacherItem: UpdateTeacherDto): Promise<Teacher> {
    teacherItem.id = id;
    return this.teacherServiceRepository.save(teacherItem);
  }

  async remove(id: number):Promise<void> {
    await this.teacherServiceRepository.delete(id);
  }
}
