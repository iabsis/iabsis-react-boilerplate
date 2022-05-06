# Simple react boilerplate

This boilerplate integrate the minimum features to start a new react project. Crafter on top the `npx create-react-app` commands, it adds some useful utils to be able to develop a clean application.

For this reason, all usual react commands are available :

* `yarn start` : Run the project in development mode
* `yarn build` : Build the source code for production
* `yarn test` : Run the unit tests
* `yarn eject` : Eject the project. It is grabbing all automated config from `creaate-react-app` into the local project. You can't revert this action.

## What is included?

We integrated and setup different libraries. The main objective was to have testing / lingint / code genration and commit hooks to prevent developer pushing untested / unclean source code.

### Unit testing

Standard libraries from react are used and use Jest under the hood.

### Generator

We have created 2 generator on top the the `plop.js` library.

### List of generators:

* yarn generate component: This command generate a new component to be embeded in any page (or other component) like Header, Footer, ...
* yarn generate page: This command generate a new page scafolding. Just add it to the router to be able to access it.

### Linting

We concider that linting is very important for a team to work together. We've setup automatic linting with eslint and prettier to work smoothly

### Git hooks

There are 2 hooks setup with the help of the `husky` library.

* Pre commit: When commiting, the eslint tries to auto fix linting issues. If some linting errors persists, the commit is cancelled.
* Pre push: When pushing, the unit test are automatically ran. If a test fails, the push is cancelled.

## What is not included?

### Templating

We believe that every project is different and requires different approaches when it comes to styling. We integrated scss support but we decided not to include any templating like bootstrap, material or tailwind. This should be decided for each project.

### Stores

The last react version is shipped with a powerfull useContext hook. This makes the use of extra store library optional for a large amount of use cases. This is the reason we don't plan to include extra stores like redux or mobx or whatever.

### Probably a lot of other things

Is is up to you to make some suggestions. It is even better if you propose a merge request with your propositions. If it focusses on code quality, chances are high that we would merge it into this project.