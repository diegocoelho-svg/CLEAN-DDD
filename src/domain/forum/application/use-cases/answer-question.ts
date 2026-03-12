import { UniqueEntityId } from '@/core/entities/unique-entity-id.js'
import { Answer } from '@/domain/forum/enterprise/entities/answer.js'
import type { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository.js'

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
  createdAt?: Date
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    })

    await this.answersRepository.create(answer)

    return answer
  }
}
