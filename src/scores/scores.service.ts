import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './entities/score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score) private scoresRepository: Repository<Score>
  ) { }
  async create(createScoreDto: CreateScoreDto): Promise<Score> {
    let score:Score = await this.scoresRepository.findOne({
      where:{
        exam_id:createScoreDto.exam_id,
        student_id:createScoreDto.student_id
      }
    });
    if(score==undefined){
      return this.scoresRepository.save(createScoreDto);
    }else{
      score.mark = createScoreDto.mark;
      return this.scoresRepository.save(score);
    }
    
  }
  findAll(): Promise<Score[]> {
    return this.scoresRepository.find({
      relations: {
        exam: true,
        student: true
      },
    });
  }

  findOne(id: number): Promise<Score> {
    return this.scoresRepository.findOne({
      where: {
        id: id
      },
      relations: {
        exam: true,
        student: true
      }
    })
  }

  update(id: number, updateScoreDto: UpdateScoreDto): Promise<Score> {
    updateScoreDto.id = id;
    return this.scoresRepository.save(updateScoreDto);
  }

  async remove(id: number): Promise<void> {
    await this.scoresRepository.delete(id);
  }
}
