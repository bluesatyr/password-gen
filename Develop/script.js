// Assignment code here


function generatePassword() {
    // prompt for password length criteria
    var pLength = prompt("Choose a password length from 8 characters up to 128 characters");
    // check to make sure it is a number from 8 and 128 characters long
    if (parseInt(pLength) <= 8 || parseInt(pLength) >= 128){
        alert("Your password length is outside of acceptable parameters! Try again!");
    } else {
        
    };
    console.log(pLength);
    
    // prompt for special character types
    var charTypes = []; // an array to store the boolean values of selected special character types. If true they are included, if false they are not included.
    
    // Prompt for types.
    
/*
    if (window.confirm("Do you wish to include lowercase letters? \n Select 'OK' for yes, 'Cancel' for no.")) {
        charTypes[0] = true;
    } else {
        charTypes[0] = false;
    }
    
    if (window.confirm("Do you wish to include uppercase letters? \n Select 'OK' for yes, 'Cancel' for no.")) {
        charTypes[1] = true;
    } else {
        charTypes[1] = false;
    }
    
    if (window.confirm("Do you wish to include numbers? \n Select 'OK' for yes, 'Cancel' for no.")) {
        charTypes[2] = true;
    } else {
        charTypes[2] = false;
    }
    
    if (window.confirm("Do you wish to include special characters? \n Select 'OK' for yes, 'Cancel' for no.")) {
        charTypes[3] = true;
    } else {
        charTypes[3] = false;
    }
    
*/ 
    
    const promptTypes = ["lowercase letters", "uppercase letters", "numbers", "special characters"];
    
    for (var i=0; i<4; i++){
        tPrompt = prompt("Do you wish to include " + promptTypes[i] +"? \n Select 'OK' for yes, 'Cancel' for no.");
        charTypes[i] = tPrompt;
    }
    
    console.log(charTypes);
    
    
    if (charTypes[0] === false && charTypes[1] === false && charTypes[2] === false && charTypes[3] === false){
        alert("Try again. You must include at least one of the four character types to generate a password.");
    }
    
    console.log(charTypes);
    
    // return charTypes
    
        

        function randomize(pLength, charTypes) { //is it necessary to roll this within another function?
            var result  = '';
            var charset = '';
            const charOptions = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789', '"!#$%&()*+,-/:;<=>?@[\]^_`{|}~_'];
            
            // loop to update charset from user criteria
            for (var i=0; i<4; i++){
                if (charTypes[i] === true){
                    charset = charset + charOptions[i];
                }
            }
            console.log(charset);
            
            // random string created from charset and length 
            var charsetLength = charset.length;
            for ( var j = 0; j < pLength; j++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
            }

            //console.log(makeid(5));
        
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
