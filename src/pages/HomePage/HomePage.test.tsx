import React from 'react';
import { screen } from '@testing-library/react';
import HomePage from './HomePage';
import { renderWithRouter } from '@utils/unitTesting';

test('renders render HomePage', () => {
  renderWithRouter(<HomePage />);
  const linkElement = screen.getByText(/Simple react boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
