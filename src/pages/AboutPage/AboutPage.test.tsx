import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

test('renders render AboutPage', () => {
  render(<AboutPage />);
  const linkElement = screen.getByText(/AboutPage/i);
  expect(linkElement).toBeInTheDocument();
});
