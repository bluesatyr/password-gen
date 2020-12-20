// Assignment code here

function generatePassword() {
    //declare variables
    //var charTypes = [];
    
    var pLength = criteria();
    var typesArray = types();

    // function generateRandom
    var result  = '';
    var charset = '';
    // char Options indices map to typesArray indices
    const charOptions = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '"!#$%&()*+,-/:;<=>?@[\]^_`{|}~_'];
    
    // loop to update charset from user criteria
    for (var i=0; i<4; i++){
        if (typesArray[i] === true){
            charset = charset + charOptions[i];
        }
    }
    console.log(charset);
    
    // random string created from charset and length 
    var charsetLength = charset.length;
    for ( var j = 0; j < pLength; j++ ) {
        result += charset.charAt(Math.floor(Math.random() * charsetLength));
    }
    console.log(result);
    return result;
}

// Criteria Function - prompts for password length
var criteria = function(){
    // prompt for password length criteria
    var num = prompt("Choose the number of characters for your password. Input a number from 8-128.");
    // check to make sure it is a number from 8 to 128 characters long
    if (parseInt(num) < 8 || parseInt(num) > 128){
        alert("Your password length is outside of acceptable parameters! Try again!");
        //restart criteria function
        return criteria();
    } 
    else {
        console.log(num);
        return num;
    }
};

// Types Function - prompts user for character type, validates and saves in an array
var types = function(){  
    // creates an array to store boolean values for selected character types.
    var charTypes = [];
    // array of character type choices
    var promptTypes = ["lowercase letters", "uppercase letters", "numbers", "special characters"];
    // prompt for character types
    for (var i=0; i<4; i++){
        var tPrompt = confirm("Do you wish to include " + promptTypes[i] +"? \n Select 'OK' for yes, 'Cancel' for no.");
        charTypes[i] = tPrompt;
    }
    console.log(charTypes);
    
    // make sure at least one character type is chosen
    if (charTypes[0] === false && charTypes[1] === false && charTypes[2] === false && charTypes[3] === false){
        alert("Try again. You must include at least one of the four character types to generate a password.");
        //restart types function
        return types(); 
    }
    else {
        console.log(charTypes);
        return charTypes;
    }
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
