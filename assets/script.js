
var beginButton = document.querySelector("#beginButton");
var startPage = document.querySelector("#startPage");
var scoresLink = document.querySelector("#scoresLink");


// Create these as global variables so that I can hide whichever is active when time runs out
var question1 = document.createElement("h2")
var question2 = document.createElement("h2")
var question3 = document.createElement("h2")

var totalCorrect = 0;
var timeLeft = 31;

Quiz();

function Quiz() {
    scoresLink.setAttribute("style", "display:none");
    
    beginButton.addEventListener("click", function(){
        startPage.style.display = "none";
        runQuiz();
    })

    function loadScoreScreen () {
        // stops the clock and hides it
    timeRemains = false;
    countdown.setAttribute("style", "display:none");
    // hides the question screens
    question1.setAttribute("style", "display:none");
    question2.setAttribute("style", "display:none");
    question3.setAttribute("style", "display:none");
    
    var finalScorePageHeader = document.createElement("h2");
    var finalScoreGreeting = document.createElement("p");
    var finalScoreEntry = document.createElement("input");
    var finalScoreButton = document.createElement("button");

    calculateFinalScore ();

    function calculateFinalScore () {  
        finalScore = totalCorrect + (Math.floor((timeLeft/5)));

        localStorage.setItem("High Score", JSON.stringify(finalScore));

        finalScorePageHeader.textContent = "Your final score is " + finalScore;
        finalScoreGreeting.textContent = "Enter your initials below and click submit:";
        finalScoreButton.textContent = "SUBMIT";

        finalScoreButton.setAttribute("type", "button");

        body.appendChild(finalScorePageHeader);
        finalScorePageHeader.appendChild(finalScoreGreeting);
        finalScorePageHeader.appendChild(finalScoreEntry);
        finalScorePageHeader.appendChild(finalScoreButton);

        // I would have liked to add multiple scores here- I think I would have needed to create multiple keys and used a series of "if" statements to determine if the previous keys already had values...
        function storeUserDetails() {
            localStorage.setItem("User Initials", JSON.stringify(finalScoreEntry.value));
            scoresLink.setAttribute("style", "display:block");
        }
        finalScoreButton.addEventListener("click", storeUserDetails);
    }
    }

    // change this value to false to stop the clock
    var timeRemains=true;  

    function runQuiz () {
        
        function countdownTimer () {
            var countdown = document.querySelector("#countdown");
            var timeInterval = setInterval(function (){
                if (timeRemains === true) {
                    timeLeft--;
                    countdown.textContent = timeLeft;
                    if (timeLeft === 0) {
                        clearInterval(timeInterval);
                        countdown.textContent = " ";
                        countdown.setAttribute("style", "color:red");
                        loadScoreScreen();
                    }
                }
                
            }, 1000);
        }
            
        questions();
        function questions () {
            countdownTimer();

            var answerList1 = document.createElement ("button")
            var answerList2 = document.createElement ("button")
            var answerList3 = document.createElement ("button")
            var answerList4 = document.createElement ("button")
            var totalCorrect = 0;

            body = document.body;

            question1.textContent = "JavaScript is a widely used scripting language that adds _______ to a webpage.";
            answerList1.textContent = "sugar and spice";
            answerList2.textContent = "structure and style";
            answerList3.textContent = "functionality and interactivity";
            answerList4.textContent = "grit and intensity";

            body.appendChild(question1);
            question1.appendChild(answerList1);
            question1.appendChild(answerList2);
            question1.appendChild(answerList3);
            question1.appendChild(answerList4);

            question1.setAttribute("style", "display:flex; justify-content:center; flex-direction:column");
            answerList1.setAttribute("style", "disply:block");

            function correctResponse (){
                totalCorrect = totalCorrect + 1;
                secondQuestion();
            }

            function incorrectResponse (){
                totalCorrect = totalCorrect - 1;
                timeLeft = timeLeft - 10;
                secondQuestion();
            }

            answerList3.addEventListener("click", correctResponse);
            answerList1.addEventListener("click", incorrectResponse);
            answerList2.addEventListener("click", incorrectResponse);
            answerList4.addEventListener("click", incorrectResponse);
            
        function secondQuestion () {
            // hides the previous question and its answers
            question1.setAttribute("style", "display:none");

            var secondAnswerList1 = document.createElement ("button")
            var secondAnswerList2 = document.createElement ("button")
            var secondAnswerList3 = document.createElement ("button")
            var secondAnswerList4 = document.createElement ("button")

            question2.textContent = "JavaScript uses two equals signs ( == ) to signify value equality. Three equals signs ( === ) in JavaScript signifies what?";
            secondAnswerList1.textContent = "the HTML and CSS are the same";
            secondAnswerList2.textContent = "a value of true at the child element";
            secondAnswerList3.textContent = "we can finally live at peace with one another";
            secondAnswerList4.textContent = "value equality and data type equality";

            body.appendChild(question2);
            question2.appendChild(secondAnswerList1);
            question2.appendChild(secondAnswerList2);
            question2.appendChild(secondAnswerList3);
            question2.appendChild(secondAnswerList4);

            question2.setAttribute("style", "display:flex; justify-content:center; flex-direction:column");
            secondAnswerList1.setAttribute("style", "disply:block");

            secondAnswerList4.addEventListener("click", secondCorrectResponse);
            secondAnswerList2.addEventListener("click", secondIncorrectResponse);
            secondAnswerList3.addEventListener("click", secondIncorrectResponse);
            secondAnswerList1.addEventListener("click", secondIncorrectResponse);

            function secondCorrectResponse (){
                totalCorrect = totalCorrect + 1;
                thirdQuestion();
            }

            function secondIncorrectResponse (){
                totalCorrect = totalCorrect - 1;
                timeLeft = timeLeft - 10;
                thirdQuestion();
            }

        function thirdQuestion() {
            question2.setAttribute("style", "display:none");
            
            var thirdAnswerList1 = document.createElement ("button")
            var thirdAnswerList2 = document.createElement ("button")
            var thirdAnswerList3 = document.createElement ("button")
            var thirdAnswerList4 = document.createElement ("button")

            question3.textContent = "The pipe symbol ( || ) can be used to evaluate two expressions in Javascript. It is used to check if...";
            thirdAnswerList1.textContent = "either of the two expressions is true";
            thirdAnswerList2.textContent = "both of the expressions are false";
            thirdAnswerList3.textContent = "one of the expressions has a data type of string";
            thirdAnswerList4.textContent = "punk rock is actually dead";

            body.appendChild(question3);
            question3.appendChild(thirdAnswerList1);
            question3.appendChild(thirdAnswerList2);
            question3.appendChild(thirdAnswerList3);
            question3.appendChild(thirdAnswerList4);

            question3.setAttribute("style", "display:flex; justify-content:center; flex-direction:column");
            thirdAnswerList1.setAttribute("style", "disply:block");

            thirdAnswerList1.addEventListener("click", thirdCorrectResponse);
            thirdAnswerList4.addEventListener("click", thirdIncorrectResponse);
            thirdAnswerList2.addEventListener("click", thirdIncorrectResponse);
            thirdAnswerList3.addEventListener("click", thirdIncorrectResponse);
        
            function thirdCorrectResponse (){
                totalCorrect = totalCorrect + 1;
                loadScoreScreen();
            }

            function thirdIncorrectResponse (){
                totalCorrect = totalCorrect - 1;
                timeLeft = timeLeft - 10;
                loadScoreScreen();
            }
        }
        }
        }
    }   
}