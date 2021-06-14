import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/aprendiendo react/i);
  expect(linkElement).toBeInTheDocument();
});

test('check if "Aprendiendo React" is a link', () => {
  // arrange
  render(<App />);
  // act
  const linkElement = screen.getByText(/aprendiendo react/i);
  console.log(linkElement.nodeName); // esto consolea A porque los links se crean con <a href="...">texto</a>
  const linkTagName = linkElement.nodeName;
  // assert
  expect(linkTagName).toBe('A');
});
