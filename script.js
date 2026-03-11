const questions = [
    {
        question: "The header file required for printf() and scanf() is",
        answer: "stdio.h",
        options: ["stdio.h", "conio.h", "math.h", "stdlib.h"]
    },
    {
        question: "Which keyword is used to declare a constant in C?",
        answer: "const",
        options: ["let", "var", "const", "define"]
    },
    {
        question: "Which function is used to allocate memory dynamically?",
        answer: "malloc",
        options: ["calloc", "malloc", "free", "sizeof"]
    },
    {
        question: "Every C program must contain a function called:",
        answer: "main()",
        options: ["start()", "system()", "main()", "include()"]
    },
    {
        question: "Which character is used to end a statement in C?",
        answer: ";",
        options: [":", ".", "!", ";"]
    },
    {
        question: "How do you write a single-line comment?",
        answer: "// Comment",
        options: ["# Comment", "// Comment", "/* Comment", "-- Comment"]
    },
    {
        question: 'What is the correct way to print "Hi" in C?',
        answer: ";",
        options: ['cout << "Hi";', 'print("Hi");' , 'printf("Hi");', 'System.out.println("Hi");']
    }
    
];

let lives = 3;

let currentInput = "";
let currIndex = 0;

const wordBank = document.getElementById('wordBank');
const message = document.getElementById('message');
const ques = document.getElementById('qs');


function initGame() {
    ques.innerHTML = `${questions[currIndex].question} 
        <input type="text" id="bl" size="5"/>`
    ;
    const blank1 = document.getElementById('bl');
    wordBank.innerHTML = '';

    questions[currIndex].options.forEach(word => {
        const btn = document.createElement('button');
        btn.innerText = word;
        btn.className = 'word-btn';
        btn.onclick = () => {
           clearBlank();
           blank1.value = word;
           currentInput= word;
           btn.disabled = true;
        };
        wordBank.appendChild(btn);
    });
}


function clearBlank() {
    const blank1 = document.getElementById('bl'); 
    blank1.value = "";
    currentInput = "";
    message.innerText = "";
    const buttons = document.querySelectorAll('.word-btn');
    buttons.forEach(btn => {
         btn.disabled = false;
    });
}

function checkAnswer() {
    const blank1 = document.getElementById('bl'); 
    currentInput = blank1.value;
    if (currentInput === questions[currIndex].answer) {
        message.innerText = "Correct!";
        message.className = "correct";
    } else {
        message.innerText = "Try again!";
        message.className = "wrong";
        lostLives();
    }
}

function lostLives(){
  if(lives >0){
    lives--;

   const hearts = document.querySelectorAll('.heart');
   hearts[lives].className = "heart-lost";
  }


}

function nextQuestion() {
    currIndex++;
    message.innerText = '';
    initGame();       //change after completing questions
}

// Going to back question
function backQuestion() {
    if(currIndex<=0){
        initGame();
     return;
    }
    currIndex--;
    initGame();
}

function NavigateToLevels(){
    window.location.href="levels.html";
}

initGame();