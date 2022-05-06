import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a complete page', () => {
  render(<App />);
  const header = screen.getByTestId('header');
  expect(header).toBeDefined();

  const body = screen.getByTestId('body');
  expect(body).toBeDefined();

  const footer = screen.getByTestId('footer');
  expect(footer).toBeDefined();
});
