import { it, expect, describe} from 'vitest'
import { currencyFormat } from './money'

describe('currencyFormat', () => {
  it('formats 1999 cents as $19.99', () => {
  expect(currencyFormat(1999)).toBe('$19.99')
})

it('display two decimal', () => {
  expect(currencyFormat(1090)).toBe('$10.90')
  expect(currencyFormat(100)).toBe('$1.00')
});
})