import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Quiz } from './Quiz';
import { User } from './User';

@Entity('questionSet')
export class QuestionSet extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Quiz, quiz => quiz.questionSet)
    quiz: Quiz[];

    @ManyToOne(() => User)
    user: User;
}
