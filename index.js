// step 1 use require and/or install readlinesync
var readlinesync = require("readline-sync");
//step 2 process taking input from user
var uname = readlinesync.question("What's your name?");
//step6 remember to define sore
var score = 0;
//step 3 add value by giving welcome as output
console.log("Welcome ", uname, " in Do you know Yashvi Quiz ");
//step 4 define play named  function

function play(quesn, ans) {
  var ugiveans = readlinesync.question(quesn);

  if (ugiveans === ans) {
    console.log(uname, " you answered it right");
    //we should add and print score, relax no negative marking
    score = score + 1;
  } else {
    console.log(uname, " Sorry You gave wronganswer!");
  }
  //as i needed below 2 lines be it if part or else i keep it in play after ifelse part completed.
  console.log("current score: ", score);
  console.log("--------------------");
}
//step 5 call play fn -- not now in v1
//play("Which city Yashvi resides in ?","Ahmedabad")

//step7 define question number as object -- be advance dont use this and go to step
// var q1 = {
//   quesn:"Which city Yashvi resides in ? ",
//   ans:"Ahmedabad"
// }
// var q2 = {
//   quesn:"Tell about Yashvi's favourite singer name. ",
//   ans:"Darshan"
// }

//step8 define question list as array and pass object

//step 9define quesnList var pass object as array

var quesnList = [
  {
    quesn: "Which city Yashvi resides in ? ",
    ans: "Ahmedabad",
  },
  {
    quesn: "Tell favourite singer name. ",
    ans: "Darshan",
  },
  {
    quesn: "Tell her favourite superhero ",
    ans: "Hanuman",
  },
  {
    quesn: " Yashvi likes Coffee or Tea ? ",
    ans: "Coffee",
  },
  {
    quesn: " Yashvi prefers book or ebook ? ",
    ans: "Book",
  },
];

//step10 we need loop
for (var qcounter = 0; qcounter < quesnList.length; qcounter = qcounter + 1) {
  var currentQ = quesnList[qcounter];
  play(currentQ.quesn, currentQ.ans);
}

var total = quesnList.length; //total score

console.log("Thankies!", uname, "You SCORED: ", score, " out of ", total); //finalscore
