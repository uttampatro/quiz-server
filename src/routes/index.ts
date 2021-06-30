import express, { Router, Request, Response } from "express";
import UserController from "../controllers/users";
import QuizController from "../controllers/quiz"

const router: Router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("server up and running");
});

// User controller
router.get("/users", UserController.fetchUserProfile);
router.get("/login", UserController.loginUser);

//Quiz controller
router.get('/questionSet', QuizController.fetchQuestionSet)
router.get('/allQuiz/:id', QuizController.fetchAllQuizBySetId)
router.get('/userScore/:id', QuizController.fetchUserScore)


export default router;
