import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders render Footer', () => {
  render(<Footer />);
  const linkElement = screen.getByTestId('footer');
  expect(linkElement).toBeInTheDocument();
});
