$(document).ready(function() {
  if (Modernizr.localstorage) {
    console.log("localstorage is supported by this browser");
  } else {
    $('.message').text("Unfortunately your browser doesn't support local storage");
    $('.message').show();
  }
});

function start() {
  localStorage.clear();
  console.log('localStorage Cleared');
  //starting score
  var point = {};
  point.score = '0';

  localStorage.setItem('point', JSON.stringify(point));
  var actualPoint = (JSON.parse(localStorage.getItem(point)));
  var realScore = parseInt(point.score);
  //setting point to be 0 everywhere
  console.log(realScore);

  for (i = 0; i < 5; i++) {
    $('.score')[i].textContent = 'Score ' + realScore;
  }

  var question1 = {};
  question1.question = 'What is the most used language for server-side database management?';
  question1.answer = 'SQL';
  //adding question1 to localStorage using JSON
  localStorage.setItem('question1', JSON.stringify(question1));

  var question2 = {};
  question2.question = 'What kind of data structure is LIFO';
  question2.answer = 'Stack';
  //adding question2 to localstorage using JSON
  localStorage.setItem('question2', JSON.stringify(question2));

  var question3 = {};
  question3.question = 'How many Elements are there in a complete binary tree with 4 levels';
  question3.answer = '15';
  //adding question3 to localstorage using JSON
  localStorage.setItem('question3', JSON.stringify(question3));

  var question4 = {};
  question4.question = 'What is the most used language for server-side database management?';
  question4.answer = 'SELECT COUNT(*) FROM FARM;';
  //adding question4 to localStorage using JSON
  localStorage.setItem('question4', JSON.stringify(question4));

  var selected_answer = {};
  selected_answer.answer1 = '';
  selected_answer.answer2 = '';
  selected_answer.answer3 = '';
  selected_answer.answer4 = '';
  localStorage.setItem('selected_answer', JSON.stringify(selected_answer));
}
//Before starting the game setting all the questions and answers in localstorage
$(".start_button")[0].addEventListener("click", start);
$(".start_button")[1].addEventListener("click", start);
//try again
$('.try_again')[0].addEventListener('click', start);

//
//actionlisteners for quiz1
//
function answer_equal(answer) {
  var point = JSON.parse(localStorage.getItem('point'));
  point.score = parseInt(point.score) + 1;
  localStorage.setItem('point', JSON.stringify(point));
  var selected_answer = JSON.parse(localStorage.getItem('selected_answer'));
  selected_answer.answer1 = answer;
  localStorage.setItem('selected_answer', JSON.stringify(selected_answer));
  //point = localStorage.getItem('actualpoint');
  for (i = 0; i < 5; i++) {
    $('.score')[i].textContent = 'Score ' + parseInt(point.score);
  }
  $('.answer_check')[0].textContent = 'Correct answer!';
  $('.answer_provided')[0].textContent = 'You selected ' + answer;

}

function answer_notequal(answer, retrivedAnswer) {
  var point1 = JSON.parse(localStorage.getItem('point'));
  var pointScore1 = point1.score;
  var selected_answer1 = JSON.parse(localStorage.getItem('selected_answer'));
  selected_answer1.answer1 = answer;
  localStorage.setItem('selected_answer', JSON.stringify(selected_answer1));
  $('.score')[4].textContent = 'Score ' + parseInt(pointScore1);
  $('.answer_check')[0].textContent = 'wrong answer!';
  $('.answer_provided')[0].textContent = 'You selected ' + answer + ' But the answer is ' + retrivedAnswer;
}

$('.answerq1')[0].addEventListener("click", function() {
  var answer = $('.answerq1')[0].textContent;
  $('.next_button')[0].href = '#quiz2';
  var retrivedObject = (JSON.parse(localStorage.getItem('question1')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal(answer);
  } else {
    answer_notequal(answer, retrivedAnswer);
  }
});

$('.answerq1')[1].addEventListener("click", function() {
  var answer = $('.answerq1')[1].textContent;
  $('.next_button')[0].href = '#quiz2';
  var retrivedObject = (JSON.parse(localStorage.getItem('question1')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal(answer);
  } else {
    answer_notequal(answer, retrivedAnswer);
  }
});

$('.answerq1')[2].addEventListener("click", function() {
  var answer = $('.answerq1')[2].textContent;
  $('.next_button')[0].href = '#quiz2';
  var retrivedObject = (JSON.parse(localStorage.getItem('question1')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal(answer);
  } else {
    answer_notequal(answer, retrivedAnswer);
  }
});

$('.answerq1')[3].addEventListener("click", function() {
  var answer = $('.answerq1')[3].textContent;
  $('.next_button')[0].href = '#quiz2';
  var retrivedObject = (JSON.parse(localStorage.getItem('question1')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal(answer);
  } else {
    answer_notequal(answer, retrivedAnswer);
  }
});



//
//actionlisteners for quiz2
//
function answer_equal2(answer) {
  var point = JSON.parse(localStorage.getItem('point'));
  point.score = parseInt(point.score) + 1;
  localStorage.setItem('point', JSON.stringify(point));
  var selected_answer = JSON.parse(localStorage.getItem('selected_answer'));
  selected_answer.answer2 = answer;
  localStorage.setItem('selected_answer', JSON.stringify(selected_answer));
  for (i = 0; i < 5; i++) {
    $('.score')[i].textContent = 'Score ' + parseInt(point.score);
  }
  $('.answer_check')[0].textContent = 'Correct answer';
  $('.answer_provided')[0].textContent = 'You selected ' + answer;

}

function answer_notequal2(answer, retrivedAnswer) {
  var selected_answer1 = JSON.parse(localStorage.getItem('selected_answer'));
  selected_answer1.answer2 = answer;
  localStorage.setItem('selected_answer', JSON.stringify(selected_answer1));

  var point1 = JSON.parse(localStorage.getItem('point'));
  var pointScore1 = point1.score;
  $('.score')[4].textContent = 'Score ' + parseInt(pointScore1);
  $('.answer_check')[0].textContent = 'Wrong answer!';
  $('.answer_provided')[0].textContent = 'You selected ' + answer + ' But the answer is ' + retrivedAnswer;
}

$('.answerq2')[0].addEventListener("click", function() {
  var answer = $('.answerq2')[0].textContent;
  $('.next_button')[0].href = '#quiz3';
  var retrivedObject = (JSON.parse(localStorage.getItem('question2')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal2(answer);
  } else {
    answer_notequal2(answer, retrivedAnswer);
  }
});

$('.answerq2')[1].addEventListener("click", function() {
  var answer = $('.answerq2')[1].textContent;
  $('.next_button')[0].href = '#quiz3';
  var retrivedObject = (JSON.parse(localStorage.getItem('question2')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal2(answer);
  } else {
    answer_notequal2(answer, retrivedAnswer);
  }
});

$('.answerq2')[2].addEventListener("click", function() {
  var answer = $('.answerq2')[2].textContent;
  $('.next_button')[0].href = '#quiz3';
  var retrivedObject = (JSON.parse(localStorage.getItem('question2')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal2(answer);
  } else {
    answer_notequal2(answer, retrivedAnswer);
  }
});

$('.answerq2')[3].addEventListener("click", function() {
  var answer = $('.answerq2')[3].textContent;
  $('.next_button')[0].href = '#quiz3';
  var retrivedObject = (JSON.parse(localStorage.getItem('question2')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal2(answer);
  } else {
    answer_notequal2(answer, retrivedAnswer);
  }
});

//
//actionlisteners for quiz3
//
function answer_equal3(answer) {
  var point = JSON.parse(localStorage.getItem('point'));
  point.score = parseInt(point.score) + 1;
  localStorage.setItem('point', JSON.stringify(point));
  var selected_answer = JSON.parse(localStorage.getItem('selected_answer'));
  selected_answer.answer3 = answer;
  localStorage.setItem('selected_answer', JSON.stringify(selected_answer));
  for (i = 0; i < 5; i++) {
    $('.score')[i].textContent = 'Score ' + parseInt(point.score);
  }
  $('.answer_check')[0].textContent = 'Correct answer';
  $('.answer_provided')[0].textContent = 'You selected ' + answer;
}

function answer_notequal3(answer, retrivedAnswer) {
  var selected_answer1 = JSON.parse(localStorage.getItem('selected_answer'));
  selected_answer1.answer3 = answer;
  localStorage.setItem('selected_answer', JSON.stringify(selected_answer1));

  var point1 = JSON.parse(localStorage.getItem('point'));
  var pointScore1 = point1.score;
  $('.score')[4].textContent = 'Score ' + parseInt(pointScore1);
  $('.answer_check')[0].textContent = 'Wrong answer!';
  $('.answer_provided')[0].textContent = 'You selected ' + answer + ' But the answer is ' + retrivedAnswer;
}


$('.answerq3')[0].addEventListener("click", function() {
  var answer = $('.answerq3')[0].textContent;
  $('.next_button')[0].href = '#quiz4';
  var retrivedObject = (JSON.parse(localStorage.getItem('question3')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal3(answer);
  } else {
    answer_notequal3(answer, retrivedAnswer);
  }
});

$('.answerq3')[1].addEventListener("click", function() {
  var answer = $('.answerq3')[1].textContent;
  $('.next_button')[0].href = '#quiz4';
  var retrivedObject = (JSON.parse(localStorage.getItem('question3')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal3(answer);
  } else {
    answer_notequal3(answer, retrivedAnswer);
  }
});

$('.answerq3')[2].addEventListener("click", function() {
  var answer = $('.answerq3')[2].textContent;
  $('.next_button')[0].href = '#quiz4';
  var retrivedObject = (JSON.parse(localStorage.getItem('question3')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal3(answer);
  } else {
    answer_notequal3(answer, retrivedAnswer);
  }
});

$('.answerq3')[3].addEventListener("click", function() {
  var answer = $('.answerq3')[3].textContent;
  $('.next_button')[0].href = '#quiz4';
  var retrivedObject = (JSON.parse(localStorage.getItem('question3')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal3(answer);
  } else {
    answer_notequal3(answer, retrivedAnswer);
  }
});

//actionlisteners for quiz3
//
function answer_equal4(answer) {
  var point = JSON.parse(localStorage.getItem('point'));
  point.score = parseInt(point.score) + 1;
  localStorage.setItem('point', JSON.stringify(point));
  var selected_answer = JSON.parse(localStorage.getItem('selected_answer'));
  selected_answer.answer4 = answer;
  localStorage.setItem('selected_answer', JSON.stringify(selected_answer));
  for (i = 0; i < 5; i++) {
    $('.score')[i].textContent = 'Score ' + parseInt(point.score);
  }
  $('.final_message')[0].textContent = 'Thank you for playing!';
  var finalpoint = JSON.parse(localStorage.getItem('point'));
  if (parseInt(finalpoint.score) == 4) {
    $('.final_message--score')[0].textContent = 'You have answered every question correctly. Congrats Genius!';
  } else {
    $('.final_message--score')[0].textContent = 'Your Score is ' + parseInt(finalpoint.score);
  }
}

function answer_notequal4(answer) {
  var selected_answer1 = JSON.parse(localStorage.getItem('selected_answer'));
  selected_answer1.answer4 = answer;
  localStorage.setItem('selected_answer', JSON.stringify(selected_answer1));

  var point1 = JSON.parse(localStorage.getItem('point'));
  var pointScore1 = point1.score;
  $('.score')[4].textContent = 'Score ' + parseInt(pointScore1);
  $('.final_message')[0].textContent = 'Thank you for playing!';
  $('.final_message--score')[0].textContent = 'Your Score is ' + parseInt(pointScore1);
}

$('.answerq4')[0].addEventListener("click", function() {
  var answer = $('.answerq4')[0].textContent;
  var retrivedObject = (JSON.parse(localStorage.getItem('question4')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal4(answer);
  } else {
    answer_notequal4(answer);
  }
});

$('.answerq4')[1].addEventListener("click", function() {
  var answer = $('.answerq4')[1].textContent;
  var retrivedObject = (JSON.parse(localStorage.getItem('question4')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal4(answer);
  } else {
    answer_notequal4(answer);
  }
});

$('.answerq4')[2].addEventListener("click", function() {
  var answer = $('.answerq4')[2].textContent;
  var retrivedObject = (JSON.parse(localStorage.getItem('question4')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal4(answer);
  } else {
    answer_notequal4(answer);
  }
});

$('.answerq4')[3].addEventListener("click", function() {
  var answer = $('.answerq4')[3].textContent;
  var retrivedObject = (JSON.parse(localStorage.getItem('question4')));
  var retrivedAnswer = retrivedObject.answer;

  if (answer == retrivedAnswer) {
    answer_equal4(answer);
  } else {
    answer_notequal4(answer);
  }
});


//
//previous Results
//
$('.results')[0].addEventListener('click', function () {
  var retrivedObject = (JSON.parse(localStorage.getItem('question1')));
  var retrivedquestion = retrivedObject.question;
$('.question1')[0].textContent = "1 " +  retrivedquestion;

var retrivedObject2 = (JSON.parse(localStorage.getItem('question2')));
var retrivedquestion2 = retrivedObject2.question;
$('.question2')[0].textContent = "2 " + retrivedquestion2 + "?" ;

var retrivedObject3 = (JSON.parse(localStorage.getItem('question3')));
var retrivedquestion3 = retrivedObject3.question;
$('.question3')[0].textContent = "3 " + retrivedquestion3 + "?";

var retrivedObject4 = (JSON.parse(localStorage.getItem('question4')));
var retrivedquestion4 = retrivedObject4.question;
$('.question4')[0].textContent = "4 " + retrivedquestion4 + "?";

var selected_answer = (JSON.parse(localStorage.getItem('selected_answer')));
var retrived_answer1 = selected_answer.answer1;
$('.answer1')[0].textContent = "- " +  retrived_answer1;

var selected_answer2 = (JSON.parse(localStorage.getItem('selected_answer')));
var retrived_answer2 = selected_answer2.answer2;
$('.answer2')[0].textContent = "- " +  retrived_answer2;

var selected_answer3 = (JSON.parse(localStorage.getItem('selected_answer')));
var retrived_answer3 = selected_answer3.answer3;
$('.answer3')[0].textContent = "- " +  retrived_answer3;

var selected_answer4 = (JSON.parse(localStorage.getItem('selected_answer')));
var retrived_answer4 = selected_answer4.answer4;
$('.answer4')[0].textContent = "- " +  retrived_answer4;

});
