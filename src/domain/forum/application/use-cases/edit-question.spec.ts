import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository.js'
import { makeQuestion } from 'test/factories/make-question.js'
import { EditQuestionUseCaseCase } from './edit-question.js'
import { UniqueEntityId } from '@/core/entities/unique-entity-id.js'

// sut -> SYSTEM UNDER TEST

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: EditQuestionUseCaseCase

describe('Edit Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new EditQuestionUseCaseCase(inMemoryQuestionsRepository)
  })

  it('should be able to edit a question', async () => {
    const newQuestion = makeQuestion({
      authorId: new UniqueEntityId('author-1')
    }, new UniqueEntityId('question-1'))

    await inMemoryQuestionsRepository.create(newQuestion)

    await sut.execute({
      questionId: newQuestion.id.toValue(),
      authorId: 'author-1',
      title: 'Question Test',
      content: 'Content Test',
    })

    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
      title: 'Question Test',
      content: 'Content Test',
    })
  })

    it('should not be able to edit a question from another user', async () => {
    const newQuestion = makeQuestion({
      authorId: new UniqueEntityId('author-1')
    }, new UniqueEntityId('question-1'))

    await inMemoryQuestionsRepository.create(newQuestion)

    expect(() => {
      return sut.execute({
        questionId: newQuestion.id.toValue(),
        authorId: 'author-2',
        title: 'Question Test',
        content: 'Content Test'
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
