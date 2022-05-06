import React from 'react';
import { render, screen } from '@testing-library/react';
import AppPage from './AppPage';

test('renders render AppPage', () => {
  render(
    <AppPage>
      <>Welcome</>
    </AppPage>,
  );
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
