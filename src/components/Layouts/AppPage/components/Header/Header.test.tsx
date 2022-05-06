import React from 'react';
import { screen } from '@testing-library/react';
import Header from './Header';
import { renderWithRouter } from '@utils/unitTesting';

test('renders render Header', () => {
  renderWithRouter(<Header />);
  const linkElement = screen.getByTestId('header');
  expect(linkElement).toBeInTheDocument();
});
