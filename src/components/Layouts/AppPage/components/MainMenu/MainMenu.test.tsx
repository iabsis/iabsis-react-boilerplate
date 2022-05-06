import React from 'react';
import { screen } from '@testing-library/react';
import MainMenu from './MainMenu';
import { renderWithRouter } from '@utils/unitTesting';

test('renders render MainMenu', () => {
  renderWithRouter(<MainMenu />);
  const linkElement = screen.getByTestId('main-menu');
  expect(linkElement).toBeInTheDocument();
});
