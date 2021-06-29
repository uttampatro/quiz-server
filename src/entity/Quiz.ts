import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { QuestionSets } from "./QuestionSet";

@Entity("quiz")
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  question: string;

  @Column()
  answer: string;

  @Column()
  options: string;

  @ManyToOne(() => QuestionSets, questionSets => questionSets.quiz)
  @JoinColumn()
  questionSets: QuestionSets
}
