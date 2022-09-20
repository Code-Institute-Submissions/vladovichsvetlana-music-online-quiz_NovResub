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
    guess("btn" + i, choices[i]); 
     
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
    new Question("The Winner takes it all was yet another N1 hit for which group?", ["Abba", "Nirvana", "Metallica", "Guns and Roses"], "Abba"), 
    new Question("Which Beetle N1 feated the word Yellow in the title?", ["Yellow submarine", "Red submarine", "Blue submarine", "Green submarine"], "Yellow submarine"), 
    new Question("George Michael first hit N1 as a member of which Duo?", ["Wham!", "Kiss", "Damn!", "Hello"], "Wham!"), 
    new Question("Everything I do I do it for you was a monster hit of whom?", ["Bryan Adams", "Elton Johns", "Sting", "Michael Jackson"], "Bryan Adams"), 
    new Question("Who was the lead singer with the Police?", ["Sting", "Elton Johns", "Michael Jackson", "Bryan Adams"], "Sting") 
    ]; 
	 
    	//slot in the quiz object instance 
    	 
    var quiz = new Quiz(questions); 
     
    populate(); 
    