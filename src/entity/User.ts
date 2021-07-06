import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';
import { QuestionSet } from './QuestionSet';

@Entity('user')
@Unique(['email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    role: string;

    @OneToMany(() => QuestionSet, questionSet => questionSet.user)
    questionSets: QuestionSet[];
}
