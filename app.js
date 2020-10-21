/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the name of Jess`s roommates?',
      answers: [
        'Winfrey, Dean, and Nick',
        'Winston, Schmidt, and Nick',
        'Winston, Craig, and Colin',
        'Willy, Sanders, and Nick'
      ],
      correctAnswer: 'Winston, Schmidt, and Nick'
    },
    {
      question: 'What is the name of the main character in Nick`s novel that he writes?',
      answers: [
        'Detective Jimmy Pepperstein',
        'Detective Jolly Dogood',
        'Detective Randy Brandsborn',
        'Detective Julius Pepperwood'
      ],
      correctAnswer: 'Detective Julius Pepperwood'
    },
    {
      question: 'What is the name of the drinking game that the roommates invented?',
      answers: [
        'Good American',
        'Thirteen Colonies',
        'God Bless America',
        'True American'
      ],
      correctAnswer: 'True American'
    },
    {
      question: 'What is the name of Winston`s cat?',
      answers: [
        'Ferguson',
        'Prince Phillip',
        'Fernando',
        'Fabian'
      ],
      correctAnswer: 'Ferguson'
    },
    {
      question: 'How did Schmidt and Nick first meet?',
      answers: [
        'On the playground in elementary school',
        'They were roommates in college',
        'Schmidt saved him from a bee sting in middle school',
        'They were in a band together in high school'
      ],
      correctAnswer: 'They were roommates in college'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
  
  // display basic html templates
  function displayStartScreen() {
    return
      `
      <div class="start-screen">
        <img src="images/new-girl.jpg" alt="new girl cast" width="500" id="start-screen-pic">
        <p>Test your knowledge of the cult classic TV show "New Girl"!</p>
        <button type="button" id="start">Start Quiz</button>
      </div>
      `
      ;
  }
  function displayQuestNumAndScore() {
    return
      `
      <ul class="question-and-score">
        <li id="question-number">
          Question Number: ${STORE.currentQuestion + 1}/${STORE.questions.length}
        </li>
        <li id="score">
          Score: ${STORE.score}/${STORE.questions.length}
        </li>
      </ul>
      `
      ;
  }

  // display possible answers from STORE array
  function displayAnswers() {
    const answersArray = STORE.questions[STORE.currentQuestion].answers;
    let answersHtml = '';
    let i=0;
    answersArray.forEach (answer => {
      answersHtml +=
        `
        <div id="option-container-0">
          <input type="radio" name="options" id="option${i+1}" value="${answer}" tabindex="${i+1}" required>
          <label for="option${i+1}"> ${answer}</label>
        </div>
        `
        ;
        i++;
    });
    return answersHtml;
  }

  // display question from STORE array
  function displayQuestion() {
    let currentQuestion = STORE.questions[STORE.currentQuestion];
    return
      `
      <form id="question-form" class="question-form">
        <fieldset>
          <div class="question">
            <legend> ${currentQuestion.question}</legend>
          </div>
          <div class="options">
            <div class="answers">
              ${displayAnswers()}
            </div>
          </div>
          <button type="submit" id="submit-answer-btn" tabindex="5">Submit</button>
          <button type="button" id="next-question-btn" tabindex="6">Next</button>
        </fieldset>
      </form>
      `
      ;
  }

  // display results screen
  function displayResults() {
    return
    `
    <div class="results">
      <form id="js-restart-quiz">
        <fieldset>
          <div class="row">
            <div class="col-12">
              <legend>Your Score is: ${STORE.score}/${STORE.questions.length}</legend>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="button" id="restart"> Restart Quiz </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    `
    ;
  } 

  // display correct or incorrect box
  function displayRightOrWrong(answerStatus) {
    let correctAnswer = STORE.questions[STORE.currentQuestion].correctAnswer;
    let html = '';
    if (answerStatus === 'correct') {
      html =
      `
      <div class="right-answer">That is correct!</div>
      `
      ; 
    }
    else if (answerStatus === 'incorrect') {
      html =
      `
      <div class="wrong-answer">That is incorrect :(...The correct answer is ${correctAnswer}.</div>
      `
      ;
    }
    return html;
  }





/********** RENDER FUNCTION(S) **********/

  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  function render() {
    let html = '';

    if (STORE.quizStarted === false) {
      $('main').html(displayStartScreen());
      return;
    }
    else if (STORE.currentQuestion >= 0 && STORE.currentQuestion < STORE.questions.length) {
      html = displayQuestNumAndScore();
      html += displayQuestion();
      $('main').html(html);
    }
    else {
      $('main').html(displayResults());
    }
  }





/********** EVENT HANDLER FUNCTIONS **********/

  // These functions handle events (submit, click, etc)
  
  function clickStart() {
    $('main').on('click', '#start', function (event) {
      STORE.quizStarted = true;
      render();
    });
  }

  function clickNext() {
    $('body').on('click', '#next-question-btn', (event) => {
      render();
    });
  }

  function clickSubmit() {
    $('body').on('submit', '#question-form', function (event) {
      event.preventDefault();
      const currentQuestion = STORE.questions[STORE.currentQuestion];
      let selectedOption = $('input[name=options]:checked').val();
      let optionContainerId = `#option-container-${currentQuestion.answers.findIndex(i => i === selectedOption)}`;

      if (selectedOption === currentQuestion.correctAnswer) {
        STORE.score++;
        $(optionContainerId).append(displayRightOrWrong('correct'));
      }

      else {
        $(optionContainerId).append(displayRightOrWrong('incorrect'));
      }
      
      STORE.currentQuestion++;
      $('#submit-answer-btn').hide();
      $('input[type=radio]').each(() => {
        $('input[radio]').attr('disabled', true);
      });
      $('#next-question-btn').show();

    });
  }

  function restartQuiz() {
    STORE.quizStarted = false;
    STORE.currentQuestion = 0;
    STORE.score = 0;
  }

  function clickRestart() {
    $('body').on('click', '#restart', () => {
      restartQuiz();
      render();
    });
  }

  function processQuizApp() {
    render();
    clickStart();
    clickNext();
    clickSubmit();
    clickRestart();
  }

  $(processQuizApp);


