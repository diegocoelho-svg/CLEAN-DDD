/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question.js'
import type { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository.js'
import type { Answer } from '@/domain/forum/enterprise/entities/answer.js'
import type { QuestionsRepository } from '../repositories/questions-repository.js'
import type { Question } from '../../enterprise/entities/question.js'
import { CreateQuestionUseCaseCase } from './create-question.js'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const createQuestion = new CreateQuestionUseCaseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'New Question',
    content: 'Content Question',
  })

  expect(question.id).toBeTruthy()
})
