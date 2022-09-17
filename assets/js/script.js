function question (text, choice, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}

function Qiuz(questions) {
    this.score = 0;
    this.question = questions;
    this.questionIndex = 0;
}

quiz.prototype.getQuestionIndex = function() {
    return this.questions{this.questionIndex};
}

quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}
 
quiz.prototype.guess = function() {
    this.questionIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innderHTML = quiz.getQuestionIndex() .text;
    }
}


var questions = [    [
    {
    "id": question-1,
    "question": "The Winner Takes It All was yet another N.1 of which group?",
    "options": [
    {
    "1": "&lt;Abba&gt;", 
    "2": "&lt;Nirvana&gt;",
    "3": "&lt;Metallica&gt;",
    "4": "&lt;Guns and Roses&gt;"
    }
    ],
    "answer": "&lt;Abba&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": question-2,
    "question": "Which Beatles N.1 featured the word Yellow in the title?",
    "options": [
    {
    "1": "&lt;Red submarine&gt;",
    "2": "&lt;Yellow submarine&gt;",
    "3": "&lt;Blue submarine&gt;",
    "4": "&lt;Green submarine&gt;"
    }
    ],
    "answer": "&lt;Yellow submarine&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": question-3,
    "question": "George Michael first hit N.1 as a member of which duo?",
    "options": [
    {
    "1": "&lt;Wham!&gt;",
    "2": "&lt;Kiss&gt;",
    "3": "&lt;Damn!&gt;",
    "4": "&lt;Hello!&gt;"
    }
    ],
    "answer": "&lt;Wham&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": question-4,
    "question": "(Everything I Do) I Do it for You! was a monster hit of whom?",
    "options": [
    {
    "1": "&lt;Bryan Adams&gt;",
    "2": "&lt;Elton John&gt;",
    "3": "&lt;Sting&gt;",
    "4": "&lt;Michael Jackson&gt;"
    }
    ],
    "answer": "&lt;Bryan Adams&gt;",
    "score": 0,
    "status": ""
    },
    {
    "id": question-5,
    "question": "Who was the lead singer with the Police?",
    "options": [
    {
    "1": "&lt;Paul McCartney&gt;",
    "2": "&lt;Sting&gt;",
    "3": "&lt;Elton John&gt;",
    "4": "&lt;Michael Jackson&gt;"
    }
    ],
    "answer": "&lt;Sting&gt;",
    "score": 0,
    "status": ""
    },
]
    var score= document.getElementById
("score");
var option0= document.getElementById 
("option0");
var option1= document.getElementById
("option1");
var option2 = document.getElementById
("option2");
var option3 = document.getElementById
("option3");
var question= document.getElementById
("question");
var quiz= document.getElementById
("quiz");
var points= document.getElementById("score");
var span= document.getElementById("span");
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background= "none";
    }
question.innerHTML= "Q."+(i+1)+" "+questionBank[i].question;
question0.innerHTML= questionBank[i].option[0];
question1.innerHTML= questionBank[i].option[1];
question2.innerHTML= questionBank[i].option[2];   
question3.innerHTML= questionBank[i].option[3];