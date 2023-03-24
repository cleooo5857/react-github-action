import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);


});


test('minus button has correct text', () => {
  render(<App/>);

  const buttonElement = screen.getByTestId("minus-button")
  expect(buttonElement).toHaveTextContent("-")
})

test('plus button has correct text', ( ) => {
  render(<App/>);

  const buttonElement = screen.getByTestId("plus-button");
  expect(buttonElement).toHaveTextContent("+")
})

test('when the + buttton is [ressed, the counter changes to 1 ', () => {
  render(<App/>)

  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1)
})

test('color test', () => {
  render(<App/>)

  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({backgroundColor: " blue"})
})

test('prevent the -,+ button from being pressed when the on/off button is clicked', () => {
  render(<App/>)

  const onOffbuttonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffbuttonElement)
  const plusButtonElement = screen.getByTestId("plus-button")
  expect(plusButtonElement).toBeDisabled()
})