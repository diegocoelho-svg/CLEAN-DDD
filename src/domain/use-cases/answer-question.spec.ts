import { AnswerQuestionUseCase } from '@/domain/use-cases/answer-question.js'
import type { AnswersRepository } from '@/domain/repositories/answers-repository.js'
import type { Answer } from '@/domain/entities/answer.js'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '1',
    content: 'Nova Resposta',
  })

  expect(answer.content).toEqual('Nova Resposta')
})
