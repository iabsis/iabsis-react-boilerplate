import React from 'react';
import AppPage from '../../components/Layouts/AppPage/AppPage';
import './HomePage.styles.scss';

/**
 * HomePage component description
 */

type HomePageProps = {};

// Rendering the page
const HomePage: React.FC<HomePageProps> = (/* {} */) => (
  <AppPage>
    <>
      <h1>Simple react boilerplate</h1>

      <p>
        This boilerplate integrate the minimum features to start a new react project. Crafter on top
        the <code>npx create-react-app</code> commands, it adds some useful utils to be able to
        develop a clean application.
        <br />
        For this reason, all usual react commands are available :
        <ul>
          <li>
            <code>yarn start</code> : Run the project in development mode
          </li>
          <li>
            <code>yarn build</code> : Build the source code for production
          </li>
          <li>
            <code>yarn test</code> : Run the unit tests
          </li>
          <li>
            <code>yarn eject</code> : Eject the project. It is grabbing all automated config from{' '}
            <code>creaate-react-app</code> into the local project. You can&quot;t revert this
            action.
          </li>
        </ul>
      </p>

      <h2>What is included?</h2>

      <p>
        We integrated and setup different libraries. The main objective was to have testing /
        lingint / code genration and commit hooks to prevent developer pushing untested / unclean
        source code.
      </p>

      <h3>Unit testing</h3>

      <p>Standard libraries from react are used and use Jest under the hood.</p>

      <h3>Generator</h3>

      <p>
        We have created 2 generator on top the the <code>plop.js</code> library.
      </p>

      <p>List of generators:</p>
      <ul>
        <li>
          <code>yarn generate component</code>: This command generate a new component to be embeded
          in any page (or other component) like Header, Footer, ...
        </li>
        <li>
          <code>yarn generate page</code>: This command generate a new page scafolding. Just add it
          to the router to be able to access it.
        </li>
      </ul>

      <h4>Linting</h4>
      <p>
        We concider that linting is very important for a team to work together. We&apos;ve setup
        automatic linting with eslint and prettier to work smoothly
      </p>

      <h4>Git hooks</h4>

      <p>
        There are 2 hooks setup with the help of the <code>husky</code> library.
      </p>

      <ul>
        <li>
          Pre commit: When commiting, the eslint tries to auto fix linting issues. If some linting
          errors persists, the commit is cancelled.
        </li>
        <li>
          Pre push: When pushing, the unit test are automatically ran. If a test fails, the push is
          cancelled.
        </li>
      </ul>

      <h2>
        What is <strong>not</strong> included?
      </h2>

      <h3>Templating</h3>

      <p>
        We believe that every project is different and requires different approaches when it comes
        to styling. We integrated scss support but we decided not to include any templating like
        bootstrap, material or tailwind. This should be decided for each project.
      </p>

      <h3>Stores</h3>

      <p>
        The last react version is shipped with a powerfull <code>useContext</code> hook. This makes
        the use of extra store library optional for a large amount of use cases. This is the reason
        we don&apos;t plan to include extra stores like redux or mobx or whatever.
      </p>

      <h3>Probably a lot of other things</h3>

      <p>
        Is is up to you to make some suggestions. It is even better if you propose a merge request
        with your propositions. If it focusses on code quality, chances are high that we would merge
        it into this project.
      </p>
    </>
  </AppPage>
);

export default HomePage;
