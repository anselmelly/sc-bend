import { Score } from "src/scores/entities/score.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name:string;
    @Column()
    email:string;
    @Column()
    phone:string;
    @Column()
    student_id:string;

    @OneToMany(() => Score, (score) => score.student,{onDelete:'CASCADE'})
    scores: Score[]
}
