# UI testing lab

This repository contains automated UI tests for the Selenium web form and the QuickPizza demo site. The chosen tools are Robot Framework (Part 3) and Cypress (Part 4). `RESULTS.md` records the manual test, results and reflection.

## Robot Framework

The `robot/` folder contains the web form tests, the QP-01 QuickPizza scenario and its reusable keywords. The `robot/results/` folder contains the reports and screenshots from two full QP-01 runs.

Requirements: Python 3.10 or newer, Chrome, and a compatible ChromeDriver. Set the `CHROMEDRIVER` environment variable to the full path of the driver executable before opening the terminal.

From the `robot/` folder in PowerShell, set up the environment:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Run the tests:

```powershell
robot first.robot web_form.robot pizza_scenario.robot
```

## Cypress

The `cypress/` folder contains the web form and QP-01 Cypress tests. Its screenshots and videos show a full run.

Requirements: Node.js 22 or newer, npm, and Chrome. From the `cypress/` folder, install the dependencies and run the tests:

```powershell
npm install
npx cypress run --browser chrome
```

Both tools need internet access to the practice sites. The QuickPizza scenario creates a pizza with a timestamped name on a shared demo site; do not run the tests in a loop or clear the shared user's ratings.
