In the project directory, you can run:

`npm start` - Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

`npm test` - Launches the test runner in the interactive watch mode.

`npm lint-fix` - fixes re. eslint.json

#### **Project structure**
- **app** - core point to the start project
- **pages** - key point to each page, usually contains api calls
- **components** - in most cases represental components that don't have business logic
  - **UI** - totally small components like Buttons, Links etc
- **services** - methods for fetching data
  - **client.js** - axios instance
- **hooks** - custom hooks
- **constants**
- **utils**
- **styles** - used sass - some general styles (classes) + variables for colors (for ex)
  - **module.scss** - used for smaller components
