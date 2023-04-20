# drink-choice
web application in ReactJS that pulls metadata from the TOM API for the “Drink choice” model and display the model name and input variables in a form and query the model to display the decision on the screen.

## set-up

Step 1: Set up the project
You can create a new React project using the create-react-app command-line tool. Open a terminal window and enter the following command:

- npx create-react-app drink-choice-app


Step 2: Install dependencies
In the project directory, install the required dependencies by running the following command:

- npm install axios tailwindcss

This will install the axios package for making HTTP requests, and the tailwindcss package for styling the components.


Step 3: Create components
In the src directory of the project, create two new files:

DrinkChoiceForm.js
Decision.js
DrinkChoiceForm.js will contain the form for inputting the data, and Decision.js will display the decision made by the model.

## DrinkChoiceForm component
The code above is a React functional component called DrinkChoiceModel that allows users to add drink choices and displays a list of the current drink choices. Here are the additions made:
1. The useState hook is used to initialize and manage the state of the drinkChoices array, which holds the current drink choices.
2. A handleSubmit function first prevents the default form submission behavior, then extracts the name, quantity, and size values from the form using event.target.elements. It then creates a new drinkChoice object with these values and adds it to the drinkChoices array using the spread operator and setDrinkChoices method. Finally, it resets the form using event.target.reset().
3. The form element is modified to include a onSubmit event handler that calls the handleSubmit function when the form is submitted. The input elements are given id attributes to correspond with the htmlFor attribute of the associated label elements.
4. A conditional statement is added to check if the drinkChoices array is empty or not. If it is not empty, a ul element is created to display the list of drink choices using the map method to iterate over each drink choice object in the drinkChoices array. If it is empty, a simple message is displayed.

## Decision component
The code defines a functional component named Decision. It takes in a props object as an argument and extracts the decision property from it using destructuring.

Within the component, it renders a div element that contains an h2 element displaying the text "Decision". Below that, it displays two p elements that display the choice and confidence properties of the decision object respectively.

The choice property represents the drink choice recommended by the model, and confidence represents how confident the model is in the recommendation.

## App.js contents
This code imports several dependencies and components including React, useState, useEffect, axios, DrinkChoiceForm and Decision.

The useState hook is used to create three different state variables: metadata, inputValues, and decision.

In the useEffect hook, axios is used to send a GET request to the specified API endpoint with an Authorization token. The response data is then stored in the metadata state variable using the setMetadata function. This is only executed once, on initial render, due to the empty array as the second parameter.

The handleInputChange function is called on an onChange event and updates the inputValues state variable with the latest value of the input field.

The handleSubmit function is called on a form submit event, which sends a POST request to the specified API endpoint with the inputValues state variable as the payload data, and an Authorization token and content type header. The response data is then stored in the decision state variable using the setDecision function.

The return statement returns a div with a className of "App" and the following components:
1. An h1 with the text "Drink Choice"
2. The DrinkChoiceForm component, which is passed the metadata, handleInputChange, and handleSubmit functions as props. It is only displayed if the metadata state variable has been set (i.e., is truthy).
3. The Decision component, which is passed the decision state variable as a prop. It is only displayed if the decision state variable has been set (i.e., is truthy).
