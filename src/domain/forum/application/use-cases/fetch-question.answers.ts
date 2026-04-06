import type { Answer } from '../../enterprise/entities/answer.js'
import type { AnswersRepository } from '../repositories/answers-repository.js'

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

interface FetchQuestionAnswersUseResponse {
  answers: Answer[]
}

export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    questionId,
    page,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId, 
      { page }
    )

    return {
      answers,
    }
  }
}
