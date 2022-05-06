import React from 'react';
import AppPage from '../../components/Layouts/AppPage/AppPage';
import './AboutPage.styles.scss';

/**
 * AboutPage component description
 */

type AboutPageProps = {};

// Rendering the page
const AboutPage: React.FC<AboutPageProps> = (/* {} */) => (
  <AppPage>
    <div data-testid="AboutPage">
      AboutPage component. Edit it at <code>pages/AboutPage/AboutPage.ts</code>
    </div>
  </AppPage>
);

export default AboutPage;
