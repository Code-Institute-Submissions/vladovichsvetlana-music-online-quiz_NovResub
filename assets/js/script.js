function question (text, options, answer) {
    this.text = text;
    this.options= options;
    this.answer = answer;
}

question.prototype.correctAnswer = function(option) {
    return option === this.answer;
}

function Qiuz(questions) {
    this.score = 0;
    this.question = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}

this.questionIndex++;

function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var options = quiz.getQuestionIndex().options;
        for(var i = 0; i< options.length; i++) {
            var element = document.getElementById("option" + i);
            element.innerHTML = options(i);
            guess("button" + i, options(i));
        }
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
} 

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + "currentQuestionNumber + "/" + quiz.questions.length";

function showScores() {
    var gameOverHtml = "<h1>Score</h1>";
    gameOverHtml += "<h2> Your score: " + quiz.score + "</h2";
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

populate();
}
