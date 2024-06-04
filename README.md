Next.js Project README
This is a Next.js project bootstrapped with create-next-app.

Getting Started
To start working on this project, follow these steps:

Clone the repository:

bash
git clone <repository-url>
Install dependencies:

bash
npm install
Run the development server:

bash
npm run dev
Open http://localhost:3000 with your browser to see the result.

Project Structure
Pages: All page components reside in the pages directory. Each file in this directory corresponds to a route in the application.
Components: Reusable components are placed in the components directory.
Helpers: Utility functions and data fetching logic are stored in the helpers directory.
Font Optimization
This project utilizes next/font to automatically optimize and load Inter, a custom Google Font.

Data Fetching
Data is fetched from the free API server at https://jsonserver.reactbd.com/. Various helper functions are provided in the helpers directory to fetch different types of data.

Testing
This project uses Jest along with @testing-library/react and @testing-library/jest-dom for testing. To run tests, use the following command:

bash
npm test
Make sure to install the required testing dependencies before running tests:

bash
npm install --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event jest jest-environment-jsdom ts-jest eslint-plugin-jest-dom eslint-plugin-testing-library
Additional Notes
Routing: The project uses Next.js routes for navigation.
Linting: ESLint is set up for code linting with Jest plugin for testing best practices.
Feel free to modify this README as needed to fit the requirements of your project!