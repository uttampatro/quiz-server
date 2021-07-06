import { Quiz } from '../../entity/Quiz';
import { QuestionSet } from '../../entity/QuestionSet';
import {
    CreateQuestionDTO,
    CreateQuestionSetDTO,
    FindAllQuizDTO,
} from './QuizDTO';
import { User } from '../../entity/User';

class QuizService {
    async getQuestionSet() {
        const questionSet = await QuestionSet.createQueryBuilder('questionSet')
            .leftJoinAndSelect('questionSet.user', 'user')
            .leftJoinAndSelect('questionSet.quiz', 'quiz')
            .select('questionSet.id')
            .addSelect('questionSet.name')
            .addSelect('user.id')
            .addSelect('user.email')
            .addSelect('user.role')
            .addSelect('quiz.id')
            .addSelect('quiz.question')
            .addSelect('quiz.answerIndex')
            .addSelect('quiz.options')
            .getMany();
        return questionSet;
    }
    async getAllQuizBySetId(dto: FindAllQuizDTO) {
        const { questionSetId } = dto;
        const allQuiz = await Quiz.find({
            where: { questionSet: questionSetId },
            relations: ['questionSet'],
        });
        return allQuiz;
    }
    async createQuestionSet(dto: CreateQuestionSetDTO) {
        const { userId, name } = dto;
        const user = await User.findOne({
            where: { id: userId },
        });
        const questionSet = new QuestionSet();
        questionSet.name = name;
        questionSet.user = user!;
        await questionSet.save();
        return questionSet;
    }
    async createQuestion(dto: CreateQuestionDTO) {
        const { questionSetId, question, answerIndex, options } = dto;
        const questionSet = await QuestionSet.findOne({
            where: { id: questionSetId },
        });
        const quiz = await new Quiz();
        quiz.question = question;
        quiz.answerIndex = answerIndex;
        quiz.options = options;
        quiz.questionSet = questionSet!;
        await quiz.save();
        return quiz;
    }
}

export default new QuizService();
