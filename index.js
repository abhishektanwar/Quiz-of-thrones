var readlineSync = require('readline-sync');
var chalk = require('chalk');

function playQuizOfThrones(questionList){
  var score = 0;
  var userName = readlineSync.question("What is your name? ");
  console.log("Welcome " + chalk.blue(userName) + "to Quiz on Game of Thrones");
  for(var i=0;i<questionList.length;i++){
    var userAnswer = readlineSync.question(questionList[i].question);
    if(userAnswer.toLowerCase() === questionList[i].answer.toLowerCase()){
      score++;
      console.log("Correct Answer");
      
    }
    else{
      console.log("Incorrect answer");
    }
    console.log("current score: " + chalk.red(score));
    console.log("=========================================");
  }
  console.log("Your total score is "+score);
  for(var i=0;i<highScores.length;i++){
    console.log(highScores[i].name + ":" + chalk.red.bold(highScores[i].score));
  }
  
  console.log("If you have beaten the highscore, please take a screenshot and send it to me, I'll update it.");
}

var highScores = [
  {
    name:"karan",
    score:"3"
  },
  {
    name:"sahil",
    score:"2"
  }
]

questionOne = {
  question:"What is the name of Jon's direwolf?",
  answer:"Ghost"
}
questionTwo = {
  question:"Which name is given to the bastards of The Reach?",
  answer:"Flowers"
}
questionThree = {
  question:"Which House is a direct vassal of House Baratheon of King's Landing?",
  answer:"Stokeworth"
}
questionfour = {
  question:"At Hoster Tully's funeral, who shot the burning arrow that hit its mark?",
  answer:"Brynden Tully"
}
questionFive = {
  question:"I always hated crossbows. Take too long to load!",
  answer:"Yoren"
}

questionList=[questionOne,questionTwo,questionThree,questionfour,questionFive];

playQuizOfThrones(questionList);