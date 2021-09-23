var readlineSync = require('readline-sync');

var intro = readlineSync.question("What is your name? ");
var score = 0;

function play(option,ques,ans){
  userAns = readlineSync.keyInSelect(option,ques);
  if(option[userAns] === ans){
    console.log("right!!");
    score = score+1;
  }
  else{
    console.log("wrong!!");
  }
console.log("Score = " + score);
}



var question = [{
  ques: "1. What is the name of the house elf that Harry befriends? ",
  option: ["Kreacher","Dobby","Hagrid"],
  ans: "Dobby",
},
{
  ques: "2. Who is Harry Potter’s godfather? ",
  option: ["Sirius Black","Dumbledore","Voldemort"],
  ans: "Sirius Black",
},
{
  ques: "3. Who introduces Harry to Tom Riddle’s diary? ",
  option: ["Hagrid","Moaning Myrtle","Dumbledore"],
  ans: "Moaning Myrtle",
},
{
  ques: "4. Who can see through the back of his own head? ",
  option: ["Dumbledore","Voldemort","Alastor Mad-Eye Moody"],
  ans: "Alastor Mad-Eye Moody",
},
{
  ques: "5. What is the name of Hagrid’s three headed dog? ",
  option: ["Fluffy","Dobby","Queenie"],
  ans: "Fluffy",
},];

for(var i = 0; i<=question.length-1;i++){
  var currentQues = question[i];
  play(currentQues.option,currentQues.ques,currentQues.ans);
}
console.log("Your final score is " + score);
