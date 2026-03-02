import { expect, test } from 'vitest'
import { SlugVO } from './slug.js'

test('it should be able to create a new slug from text', () => {
  const slug = SlugVO.createFromText('Example question title')

  expect(slug.value).toEqual('example-question-title')
})