# hw3PasswordGenerator, 24 NOV 20
#### By Ashley Stith
## Description
This Application runs in the browser and allows a user to request a randomly generated password.  The application has validation checks to ensure the password meets the users requirements.
Link to application: https://stithac.github.io/hw3PasswordGenerator/
## Features
* Application prompts user for the following password criteria:
    * Number of characters
    * Special characters wanted?
    * Uppercase characters wanted?
    * Lowercase characters wanted?
    * Numbers wanted?
* Application generates random password based on user input.
* Application validates if password satisfies all criteria. If not, application automatically runs again.
* Clicking on the Generate Password button will start/restart application.
* User input and validation criteria can be viewed in the console log.
* The generated password is displayed on the screen by dynamically changing the #password textarea via JavaScript
## Setup/Installation Requirements
* Clone this repository.
* Open repository in your browser.
* Open console log.
* Click Generate Password button and see console log to view application/validation status.
## Known Bugs
There are no known bugs.
## Technologies Used
* HTML
* CSS
* JavaScript
## Contribution Guidelines
Direct link to repository: https://github.com/stithac/hw2ResponsivePortfolio
### Specifications
1. Password must contain at least one of the 4 char types (spec char, uppercase, lowercase, number)
2. Password must be between 8 and 128 chars
3. Numchars (user input for number of chars in password) must be a number
