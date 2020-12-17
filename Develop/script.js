// Assignment code here


function generatePassword() {
    // prompt for password length criteria
    var pLength = window.prompt("Choose a password length from 8 characters up to 128 characters");
    // check to make sure it is a number from 8 and 128 characters long
    if (parseInt(pLength) >= 8 && parseInt(pLength) <= 128){
        continue;
    } else {
        window.alert("Your password length is outside of acceptable parameters! Try again!");
    }
    
    // prompt for special character types
    var sChar = [];
    
    window.prompt("Do you wish to include lowercase characters? Type 'y' for yes or 'n' for no.")
    
    // catch invalid input
    if ()
    
    console.log(pLength)
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
