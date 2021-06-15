import paddingLeft from './services/PaddingLeft';

test('check padding left function', () => {
  // arrange
  const text = 'hola mi amigo';
  const length = 6;
  let char = 'x';
  
  // act
  const result = paddingLeft(text, length, char);
  

  // assert
  expect(result).toBe('hola mi amigo');
});
