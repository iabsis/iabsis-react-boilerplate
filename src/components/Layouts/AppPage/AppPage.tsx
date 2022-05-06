import React from 'react';
import Header from '@components/Layouts/AppPage/components/Header/Header';
import './AppPage.styles.scss';
import Footer from './components/Footer/Footer';

/**
 * AppPage component description
 */

// Props to be passed to the component
type AppPageProps = {
  children: JSX.Element;
};

// Rendering the page
const AppPage: React.FC<AppPageProps> = ({ children }) => (
  <div className="AppPage">
    <Header />
    <div className="AppPageBody" data-testid="body">
      {children}
    </div>
    <Footer />
  </div>
);

export default AppPage;
