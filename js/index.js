
if (localStorage.getItem("userKey") != null) {
  userData = JSON.parse(localStorage.getItem("userKey"));
userName=userData[0].name
}
cartona=`<span>Welcome , ${userName}</span>`

document.getElementById("userName").innerHTML=cartona
var clickedAnswer;
var totalScore = 0;
var chosenAnswer;

var quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
    timeLimit: 20,
    score: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: "Mars",
    timeLimit: 15,
    score: 1,
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
    timeLimit: 25,
    score: 1,
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"],
    correctAnswer: "Blue Whale",
    timeLimit: 30,
    score: 1,
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
    timeLimit: 18,
    score: 1,
  },

  {
    question: "Who owns the North Pole??",
    options: ["Canada", "Russia", "UK", "No one"],
    correctAnswer: "No one",
    timeLimit: 18,
    score: 1,
  },

  
  {
    question: "Which of these is NOT a type of boat?",
    options: ["Catamaran", "Dungaree", "Galleon", "Junk"],
    correctAnswer: "Dungaree",
    timeLimit: 10,
    score: 1,
  }, 
   {
    question: " What is the longest that an elephant has ever lived? (That we know of) ",
    options: ["17 years", "49 years ", "86 years", "142 years"],
    correctAnswer: " 86 years",
    timeLimit: 25,
    score: 1,
  },
  {
    question: "   How many holes are on a standard bowling ball? ",
    options: ["3", "3 ", "5", "10"],
    correctAnswer: "3",
    timeLimit: 15,
    score: 1,
  },
  
  {
    question: "   What is the name of this symbol: ¶ ",
    options: ["Biltong", "Fermata", "Interrobang", "Pilcrow"],
    correctAnswer: "Pilcrow",
    timeLimit: 20,
    score: 1,
  }

];
document.getElementById("finish").style.display = "none";
var index = 0;
if (index == 0) {
  displayQuestions(index);
}

var sum = 0;
document.getElementById("submitBtn").addEventListener("click", function () {
  sum += quizData[index].timeLimit-timeLimit;
  console.log(timeLimit);
  console.log(sum);
  clearInterval(setID);

  for (let i of clickedAnswer) {
    if (i.checked) {
      chosenAnswer = i.id;
    }
  }
  if (index <= quizData.length - 1) {
    index++;
    displayQuestions(index);
  }
  if (quizData[index - 1].correctAnswer == chosenAnswer) {
    totalScore += 1;
  }
  if (index > quizData.length - 1) {
    document.getElementById("quizQuestions").style.display = "none";
    document.getElementById("finish").style.display = "block";
    index = 0;
    displayScore(totalScore);
  }
});

function displayQuestions(i) {

  if (index <= quizData.length - 1) {
    intervalSet(quizData[index].timeLimit);
  }

 
  clickedAnswer = document.getElementsByName("flexRadioDefault");

  if (i + 1 > 10) {
    i = 0;
  }
  var cartona;
  cartona = `
<div class="col-md-10">
<div class="d-flex justify-content-between p-3">
    <p>Question ${i + 1} of 10</p>
    <p id="timeLimit"></p>
</div>

<div class="d-flex flex-column p-3">
<h4 class="mb-3">What is the output : </h4>
<div class="bgQuestion" id="question">
    <p class="p-3">${quizData[i].question} </p>
</div>
</div>
<div class="answersList  p-4">

<div class="form-check py-2">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="${
      quizData[i].options[0]
    }">
    <label class="form-check-label" for="${quizData[i].options[0]}">
      A : ${quizData[i].options[0]}
    </label>
  </div>

  <div class="form-check py-2">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="${
      quizData[i].options[1]
    }" >
    <label class="form-check-label" for="${quizData[i].options[1]}">
      B : ${quizData[i].options[1]}
    </label>
  </div>

  <div class="form-check py-2">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="${
      quizData[i].options[2]
    }" >
    <label class="form-check-label" for="${quizData[i].options[2]}">
      C : ${quizData[i].options[2]}
    </label>
  </div>

  <div class="form-check py-2">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="${
      quizData[i].options[3]
    }" >
    <label class="form-check-label" for="${quizData[i].options[3]}">
      D : ${quizData[i].options[3]}
    </label>
  </div>

  
</div>
</div>



`;

  document.getElementById("questionRow").innerHTML = cartona;
}

if (document.getElementById("tryBtn")) {
  document.getElementById("tryBtn").addEventListener("click", function () {
    document.getElementById("quizQuestions").style.display = "block";
    document.getElementById("finish").style.display = "none";
    totalScore = 0;
    sum=0
    displayQuestions(index)
  });
}
function displayScore(totalScore) {
  var cartona = `
  <h4 class=" text-spec" id="score">${totalScore}</h4>
  <h4 class=" text-spec" id="score">Total Time taken : ${sum} secs</h4>

  `;
  document.getElementById("score").innerHTML = cartona;
}

var setID;
var timeLimit;
function intervalSet(time) {
  timeLimit = time;
  setID = setInterval(() => {
    timeLimit--;
    if (timeLimit == 0) {
      clearInterval(setID);
      index++
      displayQuestions(index)
     
    } 

      cartona = `
  <span>00:${timeLimit} secs</span>
  
  `;
      document.getElementById("timeLimit").innerHTML = cartona;
    
  }, 1000);
}



