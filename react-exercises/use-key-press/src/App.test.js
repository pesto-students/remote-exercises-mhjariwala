import React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('should display key pressed content when key is pressed', () => {
  const { queryByTestId } = render(<App target="<enter>"/>);
  
  fireEvent.keyDown(window, { key: 'Enter', code: 'Enter' });

  const pressedContent = queryByTestId('pressed');
  const notPressedContent = queryByTestId('not-pressed');

  expect(pressedContent).toBeInTheDocument();
  expect(notPressedContent).not.toBeInTheDocument();

  fireEvent.keyUp(window, { key: 'Enter', code: 'Enter' });
  
  const notPressedContent1 = queryByTestId('not-pressed');
  const pressedContent1 = queryByTestId('pressed');

  expect(pressedContent1).not.toBeInTheDocument();
  expect(notPressedContent1).toBeInTheDocument();
});

test(`should display key pressed content when key is pressed and 
      not remove from the dom until corresponding key up event is not invoked.`, () => {
  const { queryByTestId } = render(<App target="A"/>);
  
  fireEvent.keyDown(window, { key: 'A', code: 'KeyA' })
  
  const pressedContent = queryByTestId('pressed');
  const notPressedContent = queryByTestId('not-pressed');

  expect(pressedContent).toBeInTheDocument();
  expect(notPressedContent).not.toBeInTheDocument();

  fireEvent.keyUp(window, { key: 'Enter', code: 'Enter' });
  
  const pressedContent1 = queryByTestId('pressed');

  expect(pressedContent1).toBeInTheDocument();
});
