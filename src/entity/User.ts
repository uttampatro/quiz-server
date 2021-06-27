import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { UserQuizScore } from "./UserQuizScore";

@Entity("users")
@Unique(["email"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  email: string;

  @Column({ nullable: true })
  password: string;

//   @OneToMany(() => UserQuizScore, userQuizScore => userQuizScore)
  
}
