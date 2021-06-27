import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("userQuizScore")
export class UserQuizScore extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "uuid" })
  quizId: string;

  @Column()
  score: string;
}
