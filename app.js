/**
 * Example store structure
 */
const store = {
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)