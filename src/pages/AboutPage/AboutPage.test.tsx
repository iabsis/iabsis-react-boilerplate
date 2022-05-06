import React from 'react';
import { screen } from '@testing-library/react';
import AboutPage from './AboutPage';
import { renderWithRouter } from '@utils/unitTesting';

test('renders render AboutPage', () => {
  renderWithRouter(<AboutPage />);
  const linkElement = screen.getByTestId('AboutPage');
  expect(linkElement).toBeInTheDocument();
});
