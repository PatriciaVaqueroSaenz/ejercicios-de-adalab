import fizzbuzz from './services/Fizzbuzz';


test('check fizzbuzz function mult 3', () => {
  // arrange
  const number = 3;
  // act
  const result = fizzbuzz(number);
  // assert
  expect(result).toBe('fizz');
});


test('check fizzbuzz function mult 5', () => {
  // arrange
  const number = 5;
  // act
  const result = fizzbuzz(number);
  // assert
  expect(result).toBe('buzz');
});


test('check fizzbuzz function mult 3 and 5', () => {
  // arrange
  const number = 15;
  // act
  const result = fizzbuzz(number);
  // assert
  expect(result).toBe('fizzbuzz');
});


test('check fizzbuzz function with any other number', () => {
  // arrange
  const number = 2;
  // act
  const result = fizzbuzz(number);
  // assert
  expect(result).toBe(2);
});