    function populate() { 
    if(quiz.isEnded()) { 
    showScores(); 
    } else { 
        
    // show question 
    var element = document.getElementById('question'); 
    element.innerHTML = quiz.getQuestionIndex().text; 
	 
    
   var choices = quiz.getQuestionIndex().choices; 
        	 
    for (var i= 0; i < choices.length; i++) { 
    var element = document.getElementById('choice' + i);//choice 0 
    element.innerHTML = choices[i]; //set choice 0 innerhtml to slytherin 
    guess("button" + i, choices[i]); 
     
    } 
     
    showProgress(); 
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
    var cvurrentQuestionNumber = quiz.questionIndex + 1; 
    var element = document.getElementById("progress"); 
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length; 
    } 
 
    function showScores() { 
    var gameOverHtml = "<h1>Result</h1>"; 
    gameOverHtml += "<h2 id='score'>Score: " + quiz.score + "</h2>"; 
    var element = document.getElementById("quiz"); 
    element.innerHTML = gameOverHtml; 
    } 
	 
    var questions = [ 
    new Question("What is harrys house?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"], "Gryffindor"), 
    new Question("What is Dracos house?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"], "Slytherin"), 
    new Question("What is hermoines house?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"], "Gryffindor"), 
    new Question("What is rons house?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"], "Gryffindor"), 
    new Question("What is nevilles house?", ["Slytherin", "HufflePuff", "Gryffindor", "Ravenclaw"], "Gryffindor") 
    ]; 
	 
    	//slot in the quiz object instance 
    	 
    var quiz = new Quiz(questions); 
     
    populate(); 
    