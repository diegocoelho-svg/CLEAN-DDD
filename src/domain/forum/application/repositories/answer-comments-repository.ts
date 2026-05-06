import { AnswerComment } from "../../enterprise/entities/answer-comment.js"

export interface AnswersCommentsRepository {
  create(answerComment: AnswerComment): Promise<void>
}
