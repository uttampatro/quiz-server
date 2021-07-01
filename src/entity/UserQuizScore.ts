import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('userQuizScore')
export class UserQuizScore extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ type: 'uuid' })
    questionSetId: string;

    @Column({ nullable: true })
    score: number;
}
