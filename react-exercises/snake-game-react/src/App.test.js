import React from 'react';
import { render,cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  const app = getByTestId('app');

  expect(app).toBeInTheDocument();
});
