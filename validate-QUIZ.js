
function validate() {
 
/* Reference for JavaScript: https://www.w3schools.com/js/js_htmldom_document.asp */

var userName = document.forms[0].UserInfo.value;
var usernameError = "* Please enter a correct syntax name * \n";
var question1 = document.forms[0].Q1.value;
var score; 

var error=[];
var question1Error = "* Please answer the first question * \n";
var question2Error = "* Question 2 answer requires 2 boxes to be checked * \n";
var question3Error= "* Please answer the third question * \n";
var question4Error= "* Please answer the fourth question * \n";

var question2 = new Array();
var question2a = document.getElementById("Q2a").checked;
var question2b = document.getElementById("Q2b").checked;
var question2c = document.getElementById("Q2c").checked;
var question2d = document.getElementById("Q2d").checked;
var question2Answer = 0;

var question3 = document.forms[0].Q3.value;

var question4 = document.forms[0].Q4.value;
var question4Answer = "british, australian & new zealand sign language";
var question4AltAnswer="british, australian and new zealand sign language";

score = 0;

/* Error check for null username */
if(userName == ""){
    error.push(usernameError);
    document.getElementById("UserInfo").style.backgroundColor = "yellow";
}

/* Question 1*/
/* Answer is correct then increment the score by 1 and if left null then the user is provided with an error */
if(question1 == "c"){
    score++;
}
else if (question1 == ""){
error.push(question1Error);
document.getElementById("Q1").style.backgroundColor = "yellow";
}

/* Question 2*/
/* Loops through the answers to question 2, checks if it is the correct answers (n=2) and updates thte score if correct (a+c)*/

question2 = [question2a, question2b, question2c, question2d]; // array to hold the question answers to loop through them to check if they are correct
for(var i=0; i<question2.length; i++){

    if(question2[i] == true){
        question2Answer++;
    }
}
if(question2Answer < 2 || question2Answer > 2){
    error.push(question2Error);
    document.getElementById("Q2").style.backgroundColor = "yellow";
}
else if(question2a == true ) {
    score++;
 if(question2c == true){
    score++;
    }
} 
else if(question2c == true){
    score++
    if(question2a == true) {
        score++;
    }
}

/* Question 3*/
/* Updates the score if question 3 is correct (incrememnt by 1 again) and tells the user an error if left question unanswered */
if(question3 == "b"){
    score++;
}
else if(question3 ==""){
    error.push(question3Error);
    document.getElementById("Q3").style.backgroundColor = "yellow";
}

/* Question 4*/
/* Checks for lower case answer and accepts it if the same and increments the score*/
if (question4.toLowerCase() == question4Answer){
    score++;
}
else if(question4.toLowerCase() == question4AltAnswer){
    score++;
}
else if(question4 == ""){
    error.push(question4Error);
    document.getElementById("Q4").style.backgroundColor = "yellow";
}

/* Display alert of score to the user */
if(error.length === 0){
    document.forms[0].thisScore.value = score;
    document.getElementById("Q1").style.backgroundColor = null;
    document.getElementById("Q2").style.backgroundColor = null;
    document.getElementById("Q3").style.backgroundColor = null;
    document.getElementById("Q4").style.backgroundColor = null;

    alert("Congratulations! Your score is: " + score + "(out of 5)");
}
else{
    alert(error);
    return false;
}
}

