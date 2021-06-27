import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./Quiz"

@Entity("questionSets")
export class QuestionSets extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Quiz, quiz => quiz.id)
  quiz: Quiz[]
}
