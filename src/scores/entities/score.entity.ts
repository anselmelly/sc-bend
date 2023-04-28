import { Exam } from "src/exams/entities/exam.entity";
import { Student } from "src/students/entities/student.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Score {
    @PrimaryGeneratedColumn()
    id:number
    @Column('int', { 'name': 'examId' })
    exam_id:number
    @Column('int', { 'name': 'studentId' })
    student_id:number
    @Column()
    mark:number

    @ManyToOne(() => Exam,(exam)=>exam.scores,{onDelete:"CASCADE"})
    @JoinColumn()
    exam: Exam
    @ManyToOne(() => Student,(student)=>student.scores,{onDelete:"CASCADE"})
    @JoinColumn()
    student: Student

}
