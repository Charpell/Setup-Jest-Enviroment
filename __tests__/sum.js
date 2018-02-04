import sum from '../sum'

test('it works', () => {
  const result = sum(2, 2)
  // if (result !== 3) {
  //   throw new Error('not three')
  // }

  expect(result).toBe(4)
})