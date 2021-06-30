import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { QuestionSet } from "./QuestionSet";

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

  @ManyToOne(() => QuestionSet, (questionSet) => questionSet.quiz)
  @JoinColumn()
  questionSet: QuestionSet;
}
