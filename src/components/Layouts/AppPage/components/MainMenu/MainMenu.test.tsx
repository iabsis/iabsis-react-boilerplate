import React from 'react';
import { render, screen } from '@testing-library/react';
import MainMenu from './MainMenu';

test('renders render MainMenu', () => {
  render(<MainMenu />);
  const linkElement = screen.getByTestId('main-menu');
  expect(linkElement).toBeInTheDocument();
});
