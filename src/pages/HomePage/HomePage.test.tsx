import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders render HomePage', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Simple react boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
