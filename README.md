🧪 Playwright Automation Test Suite

## 📌 Project Overview
This project contains automated test cases developed using **Playwright with JavaScript** to validate the functionality, UI behavior, and API responses of a web application.  
The framework is designed to be **scalable, maintainable, and easy to execute**, following industry best practices.

---

## 🛠️ Tech Stack
- Automation Tool: Playwright
- Language: JavaScript
- Test Runner: Playwright Test
- Assertions: Playwright Expect
- API Testing: Playwright `request` context
- Reporting: HTML Report
- Version Control: Git

---

## 📂 Project Structure
playwright-project/


    .
    ├── ...  
    ├── test                         # Test files (alternatively `spec` or `tests`)
    │   ├── ui          
    |   |   └── login.spec.js        # UI test cases
    │   ├── api         
    │   │   └── getData.spec.js      # API test cases
    │   
    ├── playwright.config.js         # Playwright configuration file
    ├── package.json                 # Project dependencies and scripts
    ├── README.md                    # Project documentation
    ├── test-results/                # Test execution results and reports
    └── ...




---

## ⚙️ Prerequisites
Ensure the following are installed:
- Node.js (v16 or above)
- npm
- Visual Studio Code (recommended)

---

## 🚀 Installation Steps
1. Clone the repository:
```bash
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd playwright-project
Install dependencies:

bash
Copy code
npm install
Install Playwright browsers:

bash
Copy code
npx playwright install
▶️ Running Test Cases
Run all tests
bash
Copy code
npx playwright test
Run a specific test file
bash
Copy code
npx playwright test tests/ui/login.spec.js
Run tests in headed mode
bash
Copy code
npx playwright test --headed
📊 Test Reports
Generate and view the HTML report:

bash
Copy code
npx playwright show-report
The report includes:

Test execution summary

Passed/Failed test cases

Execution time

Screenshots on failure

Error logs

🧪 Test Coverage
UI Functional Testing

API Testing (GET/POST)

Status Code Validation

Response Body Validation

Cross-Browser Testing

Error Handling Scenarios

🧩 Sample API Test Case
Validates API response status code

Verifies response body structure

Ensures data integrity

✅ Best Practices
Page Object Model (POM)

Reusable utilities

Meaningful test names

Proper assertions

Clean and maintainable code

🔄 CI/CD Integration
This framework is compatible with:

GitHub Actions

Jenkins

Azure DevOps

👤 Author
Sanket Nalegaonkar
QA Automation Engineer
Skills: Manual Testing, Playwright, JavaScript, Selenium, API Testing
