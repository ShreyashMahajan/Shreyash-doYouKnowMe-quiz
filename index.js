var readlineSync = require('readline-sync');


var questionOne = {
  question : "What is my Sirname ",
  answer : "Mahajan"
}
var questionTwo = {
  question : "What is my Favourtie color ",
  answer : "Black"
}

var questionThree = {
  question : "What is my Favourtie car ",
  answer : "aventador"
}

var questionFour = {
  question : "Where do i live ",
  answer : "Indore"
}

var questionFive = {
  question : "DO i love eating ice cream ",
  answer : "no"
}
var scoreOne =0;

var questionArray =[questionOne,questionTwo,questionThree,questionFour,questionFive];

function play(question,correctAnswer){
 userAnswer = readlineSync.question(question);
 if(userAnswer.toUpperCase() === correctAnswer.toUpperCase() ){
    console.log("You are right ");
    scoreOne = scoreOne + 1;
    
 } else {
     console.log("Your were wrong ");
     scoreOne = scoreOne ;
    
 } 
   console.log("your score is : "+ scoreOne);

}


// --------------------------------------------------------
 var scoreHighest = {
    name : "Shreyash",
    score 
    : 5 ,
}

var scoreSecondHighest = {
  name : "Vicky",
  score : 4,
}


var scoreArray = [scoreHighest,scoreSecondHighest];
// ---------------------------------------------------------------------------
console.log("How well do you know Shreyash?.");
var userName = readlineSync.question("Enter your Name ");
console.log("Hello "+userName);

// --------------------------------------------------------------------------

for(i=0;i<questionArray.length;i++){
     
    play(questionArray[i].question,questionArray[i].answer)
}

console.log("-------------------------------------------------");
console.log("\nHighest score ");
for(i=0;i<scoreArray.length;i++){
   console.log("Name " +scoreArray[i].name + "\n Score : "+ scoreArray[i].score);
}


console.log("-------------------------------------------------");




console.log("Your Final score is : "+ scoreOne);
console.log("If you have beaten highest score, then send me the screenshot ");