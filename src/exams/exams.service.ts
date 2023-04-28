import { Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>
  ) { }
  create(createExamDto: CreateExamDto): Promise<Exam> {
    return this.examRepository.save(createExamDto);
  }
findScores(id:number){
  return this.examRepository.find({
    where:{
      id:id
    },
    relations:{
      scores:true
    }
  })
}
  findAll(): Promise<Exam[]> {
    return this.examRepository.find({
      relations: {
        teacher: true
      }
    })
  }

  findOne(id: number): Promise<Exam> {
    return this.examRepository.findOne({
      where: {
        id: id
      },
      relations: {
        teacher: true,
        scores:true
      }
    })
  }

  update(id: number, updateExamDto: UpdateExamDto):Promise<Exam> {
    updateExamDto.id = id;
    return this.examRepository.save(updateExamDto);
  }

  async remove(id: number) {
    await this.examRepository.delete(id);
  }
}
