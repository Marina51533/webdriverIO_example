# WebdriverIO Example Project

This project demonstrates end-to-end testing using **WebdriverIO**. It includes automated browser tests and generates **Allure** reports for detailed test visualization and tracking.

## Prerequisites

Make sure you have the following installed before cloning and running the project:

- [Node.js](https://nodejs.org/en/download/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Getting Started

### 1. Clone the Repository

To clone the project, run the following commands in your terminal:

```bash
git clone https://github.com/Marina51533/webdriverIO_example.git
cd webdriverIO_example
```

### 2. Install Dependencies

To install the necessary dependencies for this project, run the following command in the terminal:

```bash
npm install
```

This will install all the required modules listed in the `package.json` file.

### 3. Run the Tests

Once the dependencies are installed, you can run the tests using WebdriverIO. Execute the following command in your terminal:

```bash
npm run wdio
```

This command will initiate the WebdriverIO test runner based on the configurations specified in the `wdio.conf.ts` file. The tests will be executed across the defined browsers, and results will be displayed in the terminal.

## Allure Reports

To generate and view the Allure report after running the tests, follow these steps:

**1. Generate Allure Report**:

After the test run is complete, generate the Allure report using the following command:

```bash
allure generate allure-results --clean -o allure-report
```

**2. View Allure Report** :

To open the report in a browser and view the detailed test results, use the following command:

```bash
   allure serve allure-results
```

This will start a local server and automatically open the Allure report in your default web browser.

## GitHub Actions setup

To automate the execution of your WebdriverIO tests on every push, you can set up GitHub Actions. The `.yaml` file for this configuration can be found in your repository under `.github/workflows`. Here's a step-by-step guide to configure it:

**Create GitHub Actions Workflow**
In your repository, navigate to `.github/workflows` and create a new `.yml` file, if it does not already exist.

**Example YAML File**
You can reference the YAML file already published in my repository under `.github/workflows`

**Running the Script**
Once the `.yml` file is added to `.github/workflows`, the tests will automatically run on every `push` to the repository.
