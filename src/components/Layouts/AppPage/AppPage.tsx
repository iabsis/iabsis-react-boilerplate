import React from 'react';
import Header from '@components/Header/Header';
import './AppPage.styles.scss';

/**
 * AppPage component description
 */

// Props to be passed to the component
type AppPageProps = {
  children: JSX.Element;
};

// Rendering the page
const AppPage: React.FC<AppPageProps> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default AppPage;
