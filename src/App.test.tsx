import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRouter } from '@utils/unitTesting';

test('renders a complete page', () => {
  renderWithRouter(<App />);
  const header = screen.getByTestId('header');
  expect(header).toBeDefined();

  const body = screen.getByTestId('body');
  expect(body).toBeDefined();

  const footer = screen.getByTestId('footer');
  expect(footer).toBeDefined();
});
