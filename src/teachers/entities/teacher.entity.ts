import { Exam } from "src/exams/entities/exam.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;
    
    @Column()
    staff_id: string;

    @OneToMany(() => Exam, (exam) => exam.teacher,{onDelete:'CASCADE'})
    exams: Exam[]

}
