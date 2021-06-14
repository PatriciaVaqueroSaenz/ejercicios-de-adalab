import area from './services/area';

test('check square area', () => {
  // arrange
  const squareBase = 3;
  // act
  const squareArea = area.getSquareArea(squareBase);
  // assert
  expect(squareArea).toBe(9);
});

test('check square triangle area', () => {
    // arrange
    const squareBase = 3;
    const squareHeight = 3;
    // act
    const squareArea = area.getSquareTriangle(squareBase,squareHeight);
    // assert
    expect(squareArea).toBe(4.5);
  });