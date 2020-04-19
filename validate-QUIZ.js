
function validate() {
 
var userName = document.forms[0].username.value;
var usernameError = "Please enter a correct syntax name \n";
var question1 = document.forms[0].Question1.value;
var score = 0;

var error=[];
var question1Error = "Please answer the first question \n";
var question2Error = "The answer requires 2 boxes to be checked";
var question3Error= "Please answer the third question \n";
var quesiton4Error= "Please answer the fourth question \n";

var question2a = document.getElementById("q2a").checked;
var question2b = document.getElementById("q2b").checked;
var question2c = document.getElementById("q2c").checked;
var question2d = document.getElementById("q2d").checked;
var question2Answer = 0;

var question3 = document.forms[0].Question3.value;

var question4 = document.forms[0].Question4.value;
var question4Answer = "british, australian & new zealand sign language";


/* Error check for null username */
if(userName == ""){
    error.push(usernameError);
    document.getElementById("username").style.backgroundColor = "yellow";
}

/* Question 1*/
/* Answer is correct then increment the score by 1 and if left null then the user is provided with an error */
if(question1 == "c"){
    score++;
}
else if (question1 == ""){
error.push(question1Error);
document.getElementById("Question1").style.backgroundColor = "yellow";
}

/* Question 2*/
/* Loops through the answers to question 2, checks if it is the correct answers (n=2) and updates thte score if correct (a+c)*/

var question2 = [question2a, question2b, question2c, question2d];
for(var i=0; i<question2.length; i++){

    if(question2[i] == true){
        question2Answer++;
    }
}
if(question2Answer < 2 || question2Answer > 2){
    error.push(question2Error);
    document.getElementById("Question2").style.backgroundColor = "yellow";
}
else if(question2a == true|| question2c == true){
    score++;
}

/* Question 3*/
/* Updates the score if question 3 is correct (incrememnt by 1 again) and tells the user an error if left question unanswered */
if(question3 == "b"){
    score++;
}
else if(question3 ==""){
    error.push(question3Error);
    document.getElementById("Question3").style.backgroundColor = "yellow";
}

/* Question 4*/
/* Checks for lower case answer and accepts it if the same and increments the score*/
if (question4.toLowerCase() == question4Answer){
    score++;
}
else if(question4 == ""){
    error.push(quesiton4Error);
    document.getElementById("Question4").style.backgroundColor = "yellow";
}

/* Display alert of score to the user */
if(error.length == 1){
    document.forms[0].thisScore.value = score;
    document.getElementById("Question1").style.backgroundColor = null;
    document.getElementById("Question2").style.backgroundColor = null;
    document.getElementById("Question3").style.backgroundColor = null;
    document.getElementById("Question4").style.backgroundColor = null;

    alert("Congratulations! Your score is: "+score);
}
else{
    alert(error);
    return false;
}
}

