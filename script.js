/*jshint esversion: 6 */
/*jshint loopfunc:true */

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var numberArray = "0123456789".split("");
var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArray = lowerCaseArray.toString().toUpperCase().split(",");
var specialCharArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

//Generates and validates password based on pw criteria stored from user input
function generatePassword(){
  console.log("---Starting Password Generator application---");
  console.log("\n");
 
  var numChars = 0; //Initialize numChars variable

  //Prompt user to imput num of characters until their input is between 8 and 128
  while(numChars < 8 || numChars > 128 || isNaN(numChars)){
    numChars = prompt("How many characters do you want in your password? \n\nType a number from 8 to 128. ");
  }
  //Additional variables from user inputs
  var wantSpecialChar = confirm("1- Would you like SPECIAL CHARACTERS in your password?\n\n OK = Yes; Cancel = No");
  var wantUpperCase = confirm("2- Would you like UPPERCASE letters in your password?\n\n OK = Yes; Cancel = No");
  var wantLowerCase = confirm("3- Would you like LOWERCASE letters in your password?\n\n OK = Yes; Cancel = No");
  var wantNumber = confirm("4- Would you like NUMBERS in your password?\n\n OK = Yes; Cancel = No");

  //Write user input values to the console log
  console.log("User inputs: ");
  console.log("Number of characters: " + numChars);
  console.log("User wants special char? " + wantSpecialChar);
  console.log("User wants uppercase letter? " + wantUpperCase);
  console.log("User wants lowercase letter? " + wantLowerCase);
  console.log("User wants number? " + wantNumber);
  console.log("*********************************");

 //Create joinedArray based on user inputs
  var joinedArray = [];

  if(wantSpecialChar === true){
    joinedArray = joinedArray.concat(specialCharArray);
  }
  if(wantUpperCase === true){
    joinedArray = joinedArray.concat(upperCaseArray);
  }
  if(wantLowerCase === true){
    joinedArray = joinedArray.concat(lowerCaseArray);
  }
  if(wantNumber === true){
    joinedArray = joinedArray.concat(numberArray);
  }
  console.log(joinedArray);

  //Generate random passwords until all pw criteria is satisfied
  do {
    console.log("\n");
    console.log("---Generating password---");
    console.log("\n");

    var pwArray = []; //Empty array to house generated password

    //Loops through the entire joinedArray [numChars] number of times and adds a random value each time to the pwArray
    for(var i=0; i<numChars; i++){
      var rand = Math.floor(Math.random() * joinedArray.length);
      pwArray.push(joinedArray[rand]);
    }


    //PW criteria validation. Some method is used to check if there are any characters from the pwArray in each of the other arrays: specialCharArray, upperCaseArray, lowerCaseArray, numberArray
    var isSpecialCharThere = pwArray.some((val) => specialCharArray.indexOf(val) !== -1);
    var isUpperCaseThere = pwArray.some((val) => upperCaseArray.indexOf(val) !== -1);
    var isLowerCaseThere = pwArray.some((val) => lowerCaseArray.indexOf(val) !== -1);
    var isNumberThere = pwArray.some((val) => numberArray.indexOf(val) !== -1);

    //Prints out the pwArray and PW criteria validation results
    console.log("pwArray: " + pwArray);
    console.log("\n");
    console.log("Password criteria: ");
    console.log("Password contains special character? " + isSpecialCharThere);
    console.log("Password contains uppercase letter? " + isUpperCaseThere);
    console.log("Password contains lowercase letter? " + isLowerCaseThere);
    console.log("Password contains number? " + isNumberThere);
    console.log("__________________________________");

  }// End of "do" code block of do/while loop. While condition is below
  while(isSpecialCharThere === false && wantSpecialChar === true || isUpperCaseThere === false && wantUpperCase === true || isLowerCaseThere === false && wantLowerCase === true || isNumberThere === false && wantNumber === true); //While statement checks to see if any of the pw criteria is not included in the pwArray

  var genPassword = pwArray.join(""); //Removes commas from pwArray and sets assigns to genPassword variable

  return genPassword; //returns generated password with no commas
}//End of GeneratePassword() function



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //If password is empty (no char type selected by user, the generatePassword() function is invoked again)
  while(password === ""){
    alert("Your password must contain at least one type of character!");
    password = generatePassword();
  }

  console.log("Passed all validation!");
  console.log("Generated password: " + password);

  var passwordText = document.querySelector("#password");
  passwordText.value = password; //Password is set to password textarea and displayed on the screen
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
