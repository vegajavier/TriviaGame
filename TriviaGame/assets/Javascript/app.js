$(document).ready(function () {
  console.log("ready!");
});
$('.start').click(function () {
  console.log ("click");
  $('.carousel').carousel();
    interval: 1000*3  
});
//trivia questions
const myQuestions = [
  {
    question: "What is Wolverines Skeleton reinforced with?",
    answers: [
      "Xaviers Hair",
      "Adamantium",
      "Calcium"
    ],
    correctAnswer: 1
  },
  {
    question: "What is Cyclops power?",
    answers: [
      "concussive force-based, red-colored beams from his eyes",
      "Break Dancing",
      "X-ray vision"
    ],
    correctAnswer: 0
  },
  {
    question: "Where is Gambit from?",
    answers: [
      "Ultron",
      "Seattle",
      "New Orleans",
      "Wakanda"
    ],
    correctAnswer: 2
  },
  {
    question: "What is Storm's real name?",
    answers: [
      "Keke",
      "Jessica",
      "Ororo Munroe",
      "Halle Berry"
    ],
    correctAnswer: 2
  },
  {
    question: "Jean Gray becomes what character later on in Xmen?",
    answers: [
      "Deadpool",
      "Pheonix",
      "Sabertooth",
      "Juggernaut"
    ],
    correctAnswer: 1
  },
  {
    question: "Rogue was adopted by whom?",
    answers: [
      "Xavier",
      "Wolverine",
      "Jean Gray",
      "Mystique"
    ],
    correctAnswer: 3
  }
];
// print question to screen and alert answers
$(".wolv").append(myQuestions[0].question);

for (i = 0; i < myQuestions[0].answers.length; i++) {
  $('<li><input type="radio" name="rbtnCount" value =' + i + '>' + myQuestions[0].answers[i] + "</li>").appendTo(".wolv")
}
$(".wolv").on("change", function () {
  var selected = $('input[name=rbtnCount]:checked').val();
  console.log(selected)
  console.log(myQuestions[0].correctAnswer)
  if (selected == myQuestions[0].correctAnswer) {
    alert("its right!!!")
  } else {
    alert("better luck on next time!!")
  }
})
//// print questions and answers for cyclops
$(".cyc").append(myQuestions[1].question);

for (i = 0; i < myQuestions[1].answers.length; i++) {
  $('<li><input type="radio" name="rbtnCount" value =' + i + '>' + myQuestions[1].answers[i] + "</li>").appendTo(".cyc")
}
$(".cyc").on("change", function () {
  var selected = $('input[name=rbtnCount]:checked').val();
  console.log(selected)
  console.log(myQuestions[1].correctAnswer)
  if (selected == myQuestions[1].correctAnswer) {
    alert("its right!!!")
  } else {
    alert("better luck on next time!!")
  }
})
let score = 0;
//// print questions and answers for Gambit
$(".gam").append(myQuestions[2].question);

for (i = 0; i < myQuestions[2].answers.length; i++) {
  $('<li><input type="radio" name="rbtnCount" value =' + i + '>' + myQuestions[2].answers[i] + "</li>").appendTo(".gam")
}
$(".gam").on("change", function () {
  var selected = $('input[name=rbtnCount]:checked').val();
  console.log(selected)
  console.log(myQuestions[2].correctAnswer)
  if (selected == myQuestions[2].correctAnswer) {
    alert("its right!!!")
    score ++
  } else {
    alert("better luck on next time!!")
  }
})
//// print questions and answers for Storm
$(".storm").append(myQuestions[3].question);

for (i = 0; i < myQuestions[3].answers.length; i++) {
  $('<li><input type="radio" name="rbtnCount" value =' + i + '>' + myQuestions[3].answers[i] + "</li>").appendTo(".storm")
}
$(".storm").on("change", function () {
  var selected = $('input[name=rbtnCount]:checked').val();
  console.log(selected)
  console.log(myQuestions[3].correctAnswer)
  if (selected == myQuestions[3].correctAnswer) {
    alert("its right!!!")
    score ++
  } else {
    alert("better luck on next time!!")
  }
})
// print questions and answers for jean gray
$(".jean").append(myQuestions[4].question);

for (i = 0; i < myQuestions[4].answers.length; i++) {
  $('<li><input type="radio" name="rbtnCount" value =' + i + '>' + myQuestions[4].answers[i] + "</li>").appendTo(".jean")
}
$(".jean").on("change", function () {
  var selected = $('input[name=rbtnCount]:checked').val();
  console.log(selected)
  console.log(myQuestions[4].correctAnswer)
  if (selected == myQuestions[4].correctAnswer) {
    alert("its right!!!")
    score ++
  } else {
    alert("better luck on next time!!")
  }
})
//// print questions and answers for rogue
$(".rogue").append(myQuestions[5].question);

for (i = 0; i < myQuestions[5].answers.length; i++) {
  $('<li><input type="radio" name="rbtnCount" value =' + i + '>' + myQuestions[5].answers[i] + "</li>").appendTo(".rogue")
}
$(".rogue").on("change", function () {
  var selected = $('input[name=rbtnCount]:checked').val();
  console.log(selected)
  console.log(myQuestions[5].correctAnswer)
  if (selected == myQuestions[5].correctAnswer) {
    alert("its right!!!")
    score ++
  } else {
    alert("better luck on next time!!")
  }
})
  /// print score based on correct and incorrect
$(".corr").append(score);


