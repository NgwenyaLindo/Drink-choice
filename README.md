# drink-choice
web application in ReactJS that pulls metadata from the TOM API for the “Drink choice” model and display the model name and input variables in a form and query the model to display the decision on the screen.

## set-up

Step 1: Set up the project
You can create a new React project using the create-react-app command-line tool. Open a terminal window and enter the following command:

## npx create-react-app drink-choice-app

Step 2: Install dependencies
In the project directory, install the required dependencies by running the following command:

### npm install axios tailwindcss

This will install the axios package for making HTTP requests, and the tailwindcss package for styling the components.

Step 3: Create components
In the src directory of the project, create two new files:

DrinkChoiceForm.js
Decision.js
DrinkChoiceForm.js will contain the form for inputting the data, and Decision.js will display the decision made by the model.
