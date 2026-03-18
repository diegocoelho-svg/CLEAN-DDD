import { CreateQuestionUseCaseCase } from './create-question.js'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository.js'

// sut -> SYSTEM UNDER TEST

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCaseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCaseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'New Question',
      content: 'Content Question',
    })

    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionsRepository.items[0]?.id).toEqual(question.id)
  })
})
