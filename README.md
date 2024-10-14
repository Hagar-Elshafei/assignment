**Project Title: TA-Assignment - Automated Testing for UI and API**

- Description >>
    This project contains 3 UI Test Cases for SauceDemo UI (WEB) and Testing 3 REST APIs from ReqRes API.
    The project uses the Page Object Model (POM) design pattern for UI tests, ensuring modularity and reusability of code. 
    The API tests leverage the axios library for HTTP requests.

- Technologies Used >>
    Automation Framework: Playwright
    Programming Language: TypeScript
    UI Testing Target: SauceDemo (https://www.saucedemo.com)
    API Testing Target: ReqRes (https://reqres.in)
    Data Handling: Test data is stored separately to ensure clean and scalable test cases.
    CI/CD Integration: GitHub Actions (configured for continuous testing)

- Dependencies >>
    Playwright: Provides cross-browser testing capabilities.
    Axios: Simplifies making HTTP requests for API testing.

- Project Highlights >>
    > Page Object Model (POM): The UI tests use a modular POM pattern, making it easier to maintain and update selectors in a single place (e.g., LoginPage.ts and InventoryPage.ts).

    > Data-driven Testing: Test data is kept in separate files (e.g., data.ts, APITestData.ts), promoting reusability and reducing code duplication.

    > API Testing: The project integrates axios for making HTTP requests, simplifying the process of sending requests and handling responses for API tests.

    > Parallel Testing: Playwright's configuration can be adjusted to run tests in parallel for faster execution across different browsers.


- Project Structure >>
├── .github/                     # GitHub Actions CI/CD configuration
├── node_modules/                # Installed dependencies
├── pages/                       # Page Object Model classes
│   ├── InventoryPage.ts         # Inventory page locators and actions
│   └── LoginPage.ts             # Login page locators and actions
├── tests/                       # Test files
│   ├── api/                     # API test cases
│   │   └── API.test.ts          # Test cases for ReqRes API
│   └── ui/                      # UI test cases
│       ├── inventory.spec.ts    # Test cases for the inventory page
│       └── login.spec.ts        # Test cases for the login page
├── utils/                       # Utilities for handling test data
│   ├── APITestData.ts           # Test data for API tests
│   └── data.ts                  # Test data for UI tests
├── playwright.config.ts         # Playwright configuration file
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lock file for npm
└── README.md                    # Project documentation

Setup Instructions
1. Clone the Repository
2. Install Dependencies: Ensure all dependencies are installed 
3. Run Tests Locally
4. View Playwright Report: After running the tests, view the detailed report 