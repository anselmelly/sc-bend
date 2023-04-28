import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto):Promise<Teacher> {
    return this.teachersService.create(createTeacherDto);
  }

  @Get()
  findAll():Promise<Teacher[]> {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: string):Promise<Teacher> {
    return this.teachersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateTeacherDto: UpdateTeacherDto):Promise<Teacher> {
    return this.teachersService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number):Promise<void> {
    return this.teachersService.remove(+id);
  }
}
