function question (text, choice, answer) {
    this.text = text;
    this.options= options;
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
    return this.questions[this.questionIndex];
}

quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}
 
quiz.prototype.guess = function(answer) {
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
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().options;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("option" + i);
            element.innerHTML = options(i);
            guess("button" + i, options(i));
        }
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {

    }
} 

function showScores() {
    var gameOverHtml = "<h1>Score</h1>";
    gameOverHtml += "<h2 id="score"> Your scores: " + quiz.score + "</h2";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
    
}

var questions = [    
    new Question ("The Winner Takes It All was yet another N.1 of which group?", ["Abba", "Nirvana", "Metallica", "Guns and Roses"], "Abba"),
    new Question ("Which Beatles N.1 featured the word Yellow in the title?", ["Red submarine", "Yellow submarine", "Blue submarine", "Green submarine"], "Yellow submarine"),
    new Question ("George Michael first hit N.1 as a member of which duo?", ["Wham!", "Kiss", "Damn!", "Hello!"], "Wham!"),
    new Question ("(Everything I Do) I Do it for You! was a monster hit of whom?", ["Bryan Adams", "Elton John", "Sting", "Michael Jackson"], "Bryan Adams"),
    new Question ("Who was the lead singer with the Police?", ["Paul McCartney", "Sting", "Elton John", "Michael Jackson"], "Sting"),
];

var quiz = new Quiz(questions);

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