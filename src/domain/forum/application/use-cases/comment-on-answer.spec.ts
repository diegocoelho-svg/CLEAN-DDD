import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository.js'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository.js'
import { CommentOnAnswerUseCaseCase } from './comment-on-answer.js'
import { makeAnswer } from 'test/factories/make-answer.js'

// sut -> SYSTEM UNDER TEST

let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository
let sut: CommentOnAnswerUseCaseCase

describe('Comment on Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository()

    sut = new CommentOnAnswerUseCaseCase(
      inMemoryAnswersRepository,
      inMemoryAnswerCommentsRepository
    )
  })

  it('should be able to comment on answer', async () => {
    const answer = makeAnswer()

    await inMemoryAnswersRepository.create(answer)

    await sut.execute({
      answerId: answer.id.toString(),
      authorId: answer.authorId.toString(),
      content: 'Comentário Teste'
    })

    expect(inMemoryAnswerCommentsRepository.items[0]?.content).toEqual('Comentário Teste')
  })
})
