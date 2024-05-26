const quizData = [
  {
    question: 'What is the definition of a savings account?',
    options: ['An account used for daily transactions with no interest', 'An account that offers interest on deposited funds', 'An account used exclusively for investments', 'An account that charges fees for each transaction'],
    answer: 'An account that offers interest on deposited funds',
  },
  {
    question: 'What is the main function of the Bangko Sentral ng Pilipinas (BSP)?',
    options: ['To regulate the stock market', 'To oversee the banking sector and implement monetary policy', 'To provide loans to small businesses', 'To manage the national budget'],
    answer: 'To oversee the banking sector and implement monetary policy',
  },
  {
    question: 'What is the emergency fund rule of thumb?',
    options: ['Save enough to cover three to six months worth of living expenses', 'Save 10% of your monthly income', ' Save only if you have a stable job', 'Save for long-term goals only'],
    answer: 'Save enough to cover three to six months worth of living expenses',
  },
  {
    question: 'Which of the following is a government agency that provides insurance for deposits in Philippine banks?',
    options: ['SSS (Social Security System)', 'GSIS (Government Service Insurance System)', 'PDIC (Philippine Deposit Insurance Corporation)', 'PAG-IBIG Fund'],
    answer: 'PDIC (Philippine Deposit Insurance Corporation)',
  },
  {
    question: 'Which type of investment typically has the highest risk and potential return?',
    options: ['Government bonds', 'An account that offers interest on deposited funds', 'Stock market investments', 'Time deposits'],
    answer: 'Stock market investments',
  },
  {
    question: 'What does liquidity refer to in finance?',
    options: ['The ability to generate profits', 'The ease with which an asset can be converted into cash', 'The level of debt in a company', 'The growth rate of an investment'],
    answer: 'The ease with which an asset can be converted into cash',
  },
  {
    question: 'What is the purpose of the Republic Act No. 10963, also known as the TRAIN Law?',
    options: ['To reduce government spending', 'To reform the tax system by lowering personal income tax and adjusting the value-added tax (VAT) rates', 'To increase social security benefits', 'To regulate the transport sector'],
    answer: 'To reform the tax system by lowering personal income tax and adjusting the value-added tax (VAT) rates',
  },
  {
    question: 'What is the key difference between gross income and net income?',
    options: ['Gross income includes all deductions, while net income does not', 'Net income is before taxes, while gross income is after taxes', 'Gross income is the total earnings before deductions, while net income is the amount left after all deductions', 'There is no difference'],
    answer: 'Gross income is the total earnings before deductions, while net income is the amount left after all deductions',
  },
  {
    question: 'What is the main objective of the Anti-Money Laundering Act (RA 9160)?',
    options: ['To monitor foreign investments', 'To combat money laundering and ensure compliance with global standards', 'To regulate the banking sector', 'To promote the insurance industry'],
    answer: 'To combat money laundering and ensure compliance with global standards',
  },
  {
    question: 'Which agency is responsible for enforcing the Intellectual Property Code of the Philippines (RA 8293)?',
    options: ['The Department of Science and Technology (DOST)', 'The Intellectual Property Office of the Philippines (IPOPHL)', 'The National Bureau of Investigation (NBI)', 'The Department of Trade and Industry (DTI)'],
    answer: 'The Intellectual Property Office of the Philippines (IPOPHL)',
  },
  {
    question: 'What law regulates the securities market in the Philippines?',
    options: ['RA 8424 (Tax Reform Act of 1997)', 'RA 8799 (Securities Regulation Code)', 'RA 7581 (Price Act)', 'RA 7875 (National Health Insurance Act)'],
    answer: 'RA 8799 (Securities Regulation Code)',
  },
  {
    question: 'Under the Philippine Competition Act (RA 10667), what is prohibited in business practices?',
    options: ['Mergers and acquisitions', 'Monopolies and anti-competitive agreements', 'Export activities', 'Foreign investments'],
    answer: 'Monopolies and anti-competitive agreements',
  },
  {
    question: 'Which law aims to prevent and penalize acts of corruption and maintain integrity in public office?',
    options: ['RA 9485 (Anti-Red Tape Act)', 'RA 3019 (Anti-Graft and Corrupt Practices Act)', 'RA 6713 (Code of Conduct and Ethical Standards for Public Officials and Employees)', 'RA 11032 (Ease of Doing Business Act)'],
    answer: 'RA 3019 (Anti-Graft and Corrupt Practices Act)',
  },
  {
    question: 'Under which law are consumers protected from overpricing and profiteering, especially during times of calamities?',
    options: ['RA 7581 (Price Act)', 'RA 7394 (Consumer Act of the Philippines)', 'RA 10667 (Philippine Competition Act)', 'RA 10173 (Data Privacy Act)'],
    answer: 'RA 7581 (Price Act)',
  },
  {
    question: 'Under Republic Act No. 10963 (TRAIN Law), what are some of the major changes implemented?',
    options: ['Increase in personal income tax rates and decrease in corporate tax rates', 'Reduction in personal income tax rates and introduction of excise taxes on sugar-sweetened beverages', 'Elimination of value-added tax (VAT)', 'Introduction of new tariffs on imported goods'],
    answer: 'Reduction in personal income tax rates and introduction of excise taxes on sugar-sweetened beverages',
  },
  {
    question: 'What is the currency of the Philippines?',
    options: [' Yen', 'Dollar', 'Peso', 'Won'],
    answer: 'Peso ',
  },
  {
    question: 'What is the abbreviation for the Philippine Peso?',
    options: ['PHP', 'PPH', 'PES', 'PPS'],
    answer: 'PHP',
  },
  {
    question: 'Which institution is responsible for issuing the Philippine currency?',
    options: ['Department of Finance', 'Bangko Sentral ng Pilipinas (BSP)', 'Bureau of Treasury', 'Philippine Stock Exchange'],
    answer: 'Bangko Sentral ng Pilipinas (BSP)',
  },
  { 
    question: 'Where can foreign currency typically be exchanged in the Philippines?',
    options: ['Convenience stores', 'Authorized money changers', 'Schools', 'Post offices'],
    answer: 'Authorized money changers',
  },
  {
    question: 'What is one of the responsibilities of the Bangko Sentral ng Pilipinas (BSP)?',
    options: ['Printing newspapers', 'Maintaining price stability', 'Conducting national elections', 'Building infrastructure'],
    answer: 'Maintaining price stability',
  },
  {
    question: 'What is the Philippine Stock Exchange (PSE)?',
    options: ['A bank that offers investment advice', 'The main stock exchange in the Philippines', 'A government agency regulating businesses', 'An online trading platform'],
    answer: 'The main stock exchange in the Philippines',
  },
  {
    question: 'How can you start investing in the PSE?',
    options: ['By buying stocks directly from companies', 'By opening an account with a licensed stockbroker', 'By depositing money in a bank', 'By applying at the PSE office'],
    answer: 'By opening an account with a licensed stockbroker',
  },
  {
    question: 'What are stocks?',
    options: ['Loans to the government', 'Certificates of deposit', 'Shares of ownership in a company', 'Bonds issued by corporations'],
    answer: 'Shares of ownership in a company',
  },
  {
    question: 'What is the PSE Composite Index (PSEi)?',
    options: ['An index tracking all listed companies on the PSE', 'The main stock market index of the PSE', 'An index of foreign companies trading in the Philippines', 'A government index for economic performance'],
    answer: 'The main stock market index of the PSE',
  },
  { 
    question: 'What are dividends?',
    options: ['Interest paid on savings accounts', 'Profits distributed to shareholders', 'Fees charged by brokers', 'Taxes on stock transactions'],
    answer: 'Profits distributed to shareholders',
  },
  {
    question: 'What are the risks associated with stock market investing?',
    options: ['Guaranteed returns', 'Market volatility and potential loss of investment', 'Fixed interest rates', 'None, it is completely safe'],
    answer: 'Market volatility and potential loss of investment',
  },
  {
    question: 'What is a trading account?',
    options: ['An account that earns interest like a savings account', 'An account with a brokerage that allows stock trading', 'A bank account for international transactions', 'An account used for trading foreign currencies'],
    answer: 'An account with a brokerage that allows stock trading',
  },
  {
    question: 'What are the costs involved in trading stocks?',
    options: ['There are no costs involved', 'Only taxes on profits', 'Broker commissions, taxes, and other fees', 'Only the purchase price of stocks'],
    answer: 'Broker commissions, taxes, and other fees ',
  },
  {
    question: 'What is an initial public offering (IPO)?',
    options: ['A new product launch by a company', 'The process where a private company offers shares to the public for the first time', 'A loan taken by the government', 'A merger between two companies'],
    answer: 'The process where a private company offers shares to the public for the first time',
  },
  {
    question: 'What is the importance of diversification?',
    options: ['To maximize returns by focusing on one sector', 'To reduce risk by spreading investments across various sectors', 'To ensure investments are only in foreign companies', 'To avoid paying taxes'],
    answer: 'To reduce risk by spreading investments across various sectors',
  },

];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const homeButton = document.getElementById('home');
const showAnswerButton = document.getElementById('showAnswer');
const verticalCenter = document.getElementById('vertical-center');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  homeButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  verticalCenter.style.display = 'flex';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  homeButton.style.display = 'none';
  verticalCenter.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  
  homeButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';
  verticalCenter.style.display = 'flex';
  

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();