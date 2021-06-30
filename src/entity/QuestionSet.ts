import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Quiz } from "./Quiz";

@Entity("questionSet")
export class QuestionSet extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Quiz, (quiz) => quiz.questionSet)
  quiz: Quiz[];
}
