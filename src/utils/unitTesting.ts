import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

export const renderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent,
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
