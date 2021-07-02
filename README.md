# Movie search

This task project allows search by movie title and see basic info about the movie with usage of omdb API

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\

## Things to improve

- Functional reqs: add search by year, by person? (no such API), add pagination or infinite scroll
- Introduce state management library to keep state of found movies 
- Loading state, animation on route changes, page skeletons
- CRP optimisation: move to SSR (next.js) or JAMStack (Gatsby) for SEO and load time
- Optimize work with network by adding server which will cache data, make more optimal responses
- Structure perspective - new components like Error,
- Error handling
- Increase unit tests coverage
- Environment improvements: add coverage, commit-hooks, improve eslint and prettier rules, etc...
- Introduce Micro-frontend architecture by routes if app will grow to several teams =) 
