import React from 'react';
import { screen } from '@testing-library/react';
import AppPage from './AppPage';
import { renderWithRouter } from '@utils/unitTesting';

test('renders render AppPage', () => {
  renderWithRouter(
    <AppPage>
      <>Welcome</>
    </AppPage>,
  );
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
