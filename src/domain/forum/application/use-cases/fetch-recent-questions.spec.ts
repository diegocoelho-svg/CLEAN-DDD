import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository.js'
import { FetchRecentQuestionsUseCase } from './fetch-recent-questions.js'
import { makeQuestion } from 'test/factories/make-question.js'

// sut -> SYSTEM UNDER TEST

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: FetchRecentQuestionsUseCase

describe('Fetch Recent Questions', async () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new FetchRecentQuestionsUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to fetch recent questions', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionsRepository.create(
        makeQuestion()
      )
    }

    const { questions } = await sut.execute({
      page: 2,
    })

    expect(questions).toHaveLength(2)
  })
})
