import { Request, Response } from 'express';
import { get } from 'lodash';
import { QuizService } from '../services';

class QuizController {
    fetchQuestionSet = async (req: Request, res: Response) => {
        try {
            const questionSet = await QuizService.getQuestionSet();
            return res.json(questionSet);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    fetchAllQuizBySetId = async (req: Request, res: Response) => {
        try {
            const questionSetId = get(req, 'params.id');
            const allQuiz = await QuizService.getAllQuizBySetId({
                questionSetId,
            });
            return res.json(allQuiz);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    fetchUserScore = async (req: Request, res: Response) => {
        try {
            const questionSetId = get(req, 'params.id');
            const userScore = await QuizService.getUserScore({ questionSetId });
            return res.json(userScore);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}

export default new QuizController();
