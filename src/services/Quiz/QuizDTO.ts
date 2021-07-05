export interface FindQuestionSetDTO {
    id: string;
}

export interface FindAllQuizDTO {
    questionSetId: string;
}

export interface CreateQuestionSetDTO {
    userId: number;
    name: string;
}

export interface CreateQuestionDTO {
    questionSetId: number;
    question: string
    answerIndex: number
    options: string[]
}
