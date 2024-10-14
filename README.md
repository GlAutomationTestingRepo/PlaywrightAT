# PlaywrightAT

The **PlaywrightAT** project is created to demonstrate automation testing skills using the [Playwright](https://playwright.dev/) framework and TypeScript. It includes tests to check web interface functionality, such as creating and deleting users, filtering posters, and checking comments and orders.

## Test Cases

1. **Creating and Deleting a User**:
   - Creates a new user.
   - Finds the user using filters.
   - Navigates to the user's profile and deletes it.

2. **Filtering Posters and Checking Comments**:
   - Filters posters by the "Animals" theme.
   - Checks comments and user orders, matching products with orders.

## Installation

To install the project, follow these steps:

1. Clone the repository:
   - https://github.com/GlAutomationTestingRepo/PlaywrightAT.git
## Install playwright 

- npx playwright install

## Usage

to run test,execute this command:
- npx playwright test TestCase.spec.ts --headed

## Project structure

MarmelabRefactored - Final version of my project, where i Used POM in the right way

1. Application logic
 - Components - All Neccessary Blocks of UI whicth are grouped by pages
 - Pages - Login Page, PageManager , Base Page

2.Tests
 - Base Test
 - BasicTestCase.spec.ts - Main Test

3.Utils
 - Enums -custom enums whicth will be used in the test

## Author
Glebs Lusnickis
