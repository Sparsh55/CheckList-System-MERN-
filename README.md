# Checklist System Using Node.jsand EJS
Welcome to the Checklist System project! This Node.jsapplication evaluates specific conditions based on input data fetched from an API and displays the results on a modern, attractive dashboard using EJS templates.

# Tech stack
Node.js and EJS

# Features

  Real-Time Evaluation: Fetches data from the specified API and evaluates it based on predefined checklist rules.

  Dashboard Visualization: Displays the status (Passed/Failed) of each rule on a sleek, modern dashboard.

  Modular Design: Easily add or modify checklist rules without significant changes to the existing codebase.


# Screenshots
(![image](https://github.com/user-attachments/assets/990fd331-e214-4e57-939f-73a817a38622)
)

# Getting Started
Prerequisites:-
Node.js(v14 or higher)
npm (v6 or higher)

# Installation
Clone the repository:
git clone https://github.com/your-username/checklist-system.git
cd checklist-system

# Install dependencies:
npm install

# Start the server:
npm start
Open your browser and navigate to:

http://localhost:4100/

# Project Structure
checklist-system/
├── public/
│   ├── styles.css
├── views/
│   ├── dashboard.ejs
├── checklistConfig.js
├── evaluateChecklist.js
├── server.js
├── README.md

# Configuration
Checklist Rules
Define and modify your checklist rules in checklist.js:

javascript
export const checklistRules = [
  {
    name: "Valuation Fee Paid",
    condition: data => data.isValuationFeePaid === true,
  },
  {
    name: "UK Resident",
    condition: data => data.isUkResident === true,
  },
  {
    name: "Risk Rating Medium",
    condition: data => data.riskRating === "Medium",
  },
  {
    name: "LTV Below 60%",
    condition: data => (data.loanRequired / data.purchasePrice) * 100 < 60,
  },
];

# Code Explanation
index.js
Sets up the Express server, fetches data from the API, evaluates the checklist, and renders the results using EJS templates.

verifycheckList.js
Contains the logic to evaluate the checklist rules based on the provided data.

dashboard.ejs
EJS template that displays the checklist results on the dashboard.

styles.css
CSS file for styling the dashboard.

# Future Enhancements
Additional Rules: Easily add new rules to the checklist.

Enhanced UI: Further improve the user interface for a more engaging experience.

Error Handling: Improve error handling for better user feedback.

# Contributing
We welcome contributions! Please read our Contributing Guidelines before submitting a pull request.

Designed and Developed by Sparsh Saxena

# License
This project is licensed under the MIT License. See the LICENSE file for details.
