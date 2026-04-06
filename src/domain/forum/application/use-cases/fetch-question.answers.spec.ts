import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository.js'
import { FetchQuestionAnswersUseCase } from './fetch-question.answers.js'
import { makeAnswer } from 'test/factories/make-answer.js'
import { UniqueEntityId } from '@/core/entities/unique-entity-id.js'

// sut -> SYSTEM UNDER TEST

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: FetchQuestionAnswersUseCase

describe('Fetch Question Answers', async () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new FetchQuestionAnswersUseCase(inMemoryAnswersRepository)
  })

  it('should be able to fetch question answers', async () => {
    await inMemoryAnswersRepository.create(makeAnswer(
      {
        questionId: new UniqueEntityId('question-1')
      }
    ))
    await inMemoryAnswersRepository.create(makeAnswer(
      {
        questionId: new UniqueEntityId('question-1')
      }
    ))
    await inMemoryAnswersRepository.create(makeAnswer(
      {
        questionId: new UniqueEntityId('question-1')
      }
    ))

    const { answers } = await sut.execute({
      questionId: 'question-1',
      page: 1,
    })

    expect(answers).toHaveLength(3)
  })

  it('should be able to fetch recent questions', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryAnswersRepository.create(
        makeAnswer({ questionId: new UniqueEntityId('question-1')},
      ))
    }

    const { answers } = await sut.execute({
      questionId: 'question-1',
      page: 2,
    })

    expect(answers).toHaveLength(2)
  })
  
})
