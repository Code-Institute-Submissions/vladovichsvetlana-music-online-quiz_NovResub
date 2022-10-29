// Listing the questions, choices and correct answers:
const allQuestions = [
    {
      question: 'The Winner takes it all was yet another N1 hit for which group?',
      choices: ['Abba', 'Nirvana', 'Metallica', 'Guns and Roses'],
      correctAnswer: 0
    },
    {
      question: 'Which Beetle N1 feated the word Yellow in the title?',
      choices: [
        'Yellow submarine',
        'Red submarine',
        'Blue submarine',
        'Green submarine'
      ],
      correctAnswer: 0
    },
    {
      question: 'George Michael first hit N1 as a member of which Duo?',
      choices: ['Kiss', 'Damn!', 'Hello', 'Wham!'],
      correctAnswer: 3
    },
    {
      question: 'Everything I do I do it for you was a monster hit of whom?',
      choices: ['Elton Johns', 'Bryan Adams', 'Sting', 'Michael Jackson'],
      correctAnswer: 1
    },
    {
      question: 'Who was the lead singer with the Police?',
      choices: ['Sting', 'Elton Johns', 'Michael Jackson', 'Bryan Adams'],
      correctAnswer: 0
    }
  ];

  // Adding function to generate quiz options:
  function Quiz(options) {
    var elem = options.elem;
    var allQuestions = options.questions;
    var q_number = allQuestions.length;
    var answers = [];
    var questions = [];
    var correct_answers = 0;
    var current_number;
    generateQuestions(allQuestions);
    initQuiz();

    // Adding function to generate questions:
    function generateQuestions(q) {
      for (var i = 0; i < q_number; i++) {
        var question = document.createElement('div');
        question.classList.add('question');
        question.id = 'question';
        var title = document.createElement('h1');
        title.textContent = q[i].question;
        question.appendChild(title);
        var list = document.createElement('ul');
        for (var j = 0, len = q[i].choices.length; j < len; j++) {
          var choice = document.createElement('li');
          var check = document.createElement('input');
          check.setAttribute('type', 'radio');
          check.setAttribute('name', 'question');
          var choice_text = document.createElement('label');
          choice_text.setAttribute('for', check.name);
          choice_text.textContent = q[i].choices[j];
          choice.appendChild(check);
          choice.appendChild(choice_text);
          list.appendChild(choice);
        }
        var prev_button = document.createElement('button');
        prev_button.textContent = 'Previous Question';
        prev_button.addEventListener('click', prevQuestion);
        var next_button = document.createElement('button');
        if (i === q_number - 1) {
          next_button.textContent = 'Finish Quiz';
          next_button.addEventListener('click', finishQuiz);
        } else {
          next_button.textContent = 'Next Question';
          next_button.addEventListener('click', nextQuestion);
        }
        question.appendChild(list);
        if (i > 0) question.appendChild(prev_button);
        question.appendChild(next_button);
        questions.push(question);
      }
    }

    // Adding redirecting function:
    function render_question(number) {
      var warning = elem.getElementsByClassName('warning')[0];
      if (warning) {
        elem.removeChild(warning);
      }
      elem.appendChild(questions[number]);
      $('#question').hide().fadeIn(500);
    }

    function initQuiz() {
      current_number = 0;
      render_question(current_number);
    }

    // Adding function to check the answers:
    function checkAnswers() {
      for (var i = 0; i < q_number; i++) {
        if (answers[i] === allQuestions[i].correctAnswer) {
          correct_answers++;
        }
      }
    }

    // Adding function to check the answers and to diplay the warnings:
    function validateAnswer() {
      var list_items = elem.getElementsByTagName('input');
      var answered = false;
      for (var i = 0, len = list_items.length; i < len; i++) {
        if (list_items[i].checked) {
          answers.push(i);
          answered = true;
          break;
        }
      }
      if (!answered && !elem.getElementsByClassName('warning')[0]) {
        var warning = document.createElement('span');
        warning.textContent = 'Answer the question before you proceed, please.';
        warning.classList.add('warning');
        elem.appendChild(warning);
      }
      return answered;
    }

    // Adding function to display the next question:
    function nextQuestion() {
      if (validateAnswer()) {
        elem.removeChild(questions[current_number]);
        current_number++;
        render_question(current_number);
      }
    }

    // Adding function to display the previous question:
    function prevQuestion() {
      elem.removeChild(questions[current_number]);
      answers.pop();
      current_number--;
      render_question(current_number);
    }

    // Adding function to finish quiz:
    function finishQuiz() {
      if (validateAnswer()) {
        checkAnswers();
        elem.removeChild(questions[current_number]);
        var result = document.createElement('p');
        if (correct_answers === 0) {
          result.textContent =
            'Thank you for taking this quiz! Sorry, but none of your answers were right :( Try again if you want to improve your score.';
        } else {
          result.textContent =
            'Thank you for taking this quiz! Your final score is: ' +
            correct_answers +
            ' correct answers!';
        }
        elem.appendChild(result);
      }
    }
  }
  var quiz = new Quiz({
    elem: document.getElementById('quiz'),
    questions: allQuestions
  });