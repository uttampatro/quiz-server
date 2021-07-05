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
    createQuestionSets = async (req: Request, res: Response) => {
        try {
            const userId = get(req, 'body.userId');
            const name = get(req, 'body.name');
            const questionSet = await QuizService.createQuestionSet({
                userId: userId,
                name: name,
            });
            return res.json(questionSet);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    createQuestions = async (req: Request, res: Response) => {
        try {
            const questionSetId = get(req, 'body.questionSetId');
            const question = get(req, 'body.question');
            const answerIndex = get(req, 'body.answerIndex');
            const options = get(req, 'body.options');
            const quiz = await QuizService.createQuestion({
                question: question,
                questionSetId: questionSetId,
                answerIndex: answerIndex,
                options: options,
            });
            return res.json(quiz);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}

export default new QuizController();
