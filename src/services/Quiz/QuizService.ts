import { Quiz } from '../../entity/Quiz';
import { QuestionSet } from '../../entity/QuestionSet';
import { UserQuizScore } from '../../entity/UserQuizScore';
import { FindAllQuizDTO, FindUserScore } from './QuizDTO';

class QuizService {
    async getQuestionSet() {
        const questionSet = await QuestionSet.find();
        return questionSet;
    }
    async getAllQuizBySetId(dto: FindAllQuizDTO) {
        const { questionSetId } = dto;
        const allQuiz = await Quiz.find({
            where: { questionSet: questionSetId },
        });
        return allQuiz;
    }
    async getUserScore(dto: FindUserScore) {
        const { questionSetId } = dto;
        const userScore = await UserQuizScore.findOne({
            where: { questionSetId },
            select: ["id", "score"]
        });
        return userScore;
    }
}

export default new QuizService();
