import type { AnswersCommentsRepository } from "@/domain/forum/application/repositories/answer-comments-repository.js";
import type { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment.js";

export class InMemoryAnswerCommentsRepository implements AnswersCommentsRepository {
  public items: AnswerComment[] = []

  async create(answerComment: AnswerComment) {
    this.items.push(answerComment)
  }
}