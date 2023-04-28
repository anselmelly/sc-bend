import { Score } from "src/scores/entities/score.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name:string;

    @Column('int', { 'name': 'teacherId' })
    teacher_id:number

    @Column()
    pass_mark:number

    @ManyToOne(() => Teacher,(teacher)=>teacher.exams,{onDelete:"CASCADE"})
    @JoinColumn()
    teacher: Teacher

    @OneToMany(() => Score, (score) => score.exam,{onDelete:'CASCADE'})
    scores: Score[]
}
