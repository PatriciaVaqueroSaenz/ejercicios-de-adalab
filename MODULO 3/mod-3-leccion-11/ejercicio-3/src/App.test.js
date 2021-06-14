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

test('check if href of link "Aprendiendo React" is https://reactjs.org', () => {
  // arrange
  render(<App />);
  // act
  const linkElement = screen.getByText(/aprendiendo react/i);
  //console.log(linkElement.nodeName); // esto consolea A porque los links se crean con <a href="...">texto</a>
  const linkHref = linkElement.href;
  console.log(linkElement.href)
  // assert
  expect(linkHref).toBe('https://reactjs.org/');
});
