
var beginButton = document.querySelector("#beginButton");
var startPage = document.querySelector("#startPage");

Quiz();

function Quiz() {
    beginButton.addEventListener("click", function(){
        startPage.style.display = "none";
        runQuiz();

    })

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
                    }
                }
                
            }, 1000);
        }
        // var question1 = null;
        // var body = null;
        
        var timeLeft = 31;
            
        questions();
        function questions () {
            countdownTimer();
            question1 = document.createElement("h2")
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
                // hides the question and its answers
            question1.setAttribute("style", "display:none");

            var question2 = document.createElement("h2")
            var secondAnswerList1 = document.createElement ("button")
            var secondAnswerList2 = document.createElement ("button")
            var secondAnswerList3 = document.createElement ("button")
            var secondAnswerList4 = document.createElement ("button")

            question2.textContent = "JavaScript uses two equals signs ( == ) to signify value equality. Three equals signs ( === ) in JavaScript signifies what?";
            secondAnswerList1.textContent = "the HTML and CSS are the same";
            secondAnswerList2.textContent = "a value of true at the child element";
            secondAnswerList3.textContent = "value equality at the parent element";
            secondAnswerList4.textContent = "value equality and data type equality";

            body.appendChild(question2);
            question2.appendChild(secondAnswerList1);
            question2.appendChild(secondAnswerList2);
            question2.appendChild(secondAnswerList3);
            question2.appendChild(secondAnswerList4);

            question2.setAttribute("style", "display:flex; justify-content:center; flex-direction:column");
            secondAnswerList1.setAttribute("style", "disply:block");

            function secondCorrectResponse() {
                    totalCorrect = totalCorrect + 1;
                    loadScoreScreen();
            }

            function secondIncorrectResponse() {
                    totalCorrect = totalCorrect - 1;
                    timeLeft = timeLeft - 10;
                    loadScoreScreen();
            }

            secondAnswerList4.addEventListener("click", secondCorrectResponse);
            secondAnswerList2.addEventListener("click", secondIncorrectResponse);
            secondAnswerList3.addEventListener("click", secondIncorrectResponse);
            secondAnswerList1.addEventListener("click", secondIncorrectResponse);
    
            function loadScoreScreen () {
                    // stops the clock and hides it
                timeRemains = false;
                countdown.setAttribute("style", "display:none");
                // hides the second question screen
                question2.setAttribute("style", "display:none");
                
                var finalScorePageHeader = document.createElement("h2");
                var finalScoreGreeting = document.createElement("p");
                var finalScoreEntry = document.createElement("input");
                var finalScoreButton = document.createElement("button");
    
                calculateFinalScore ();
    
                function calculateFinalScore () {  
                    finalScore = totalCorrect + (Math.floor((timeLeft/5)));
    
                    localStorage.setItem("High Score", JSON.stringify(finalScore));
    
                    finalScorePageHeader.textContent = "Your final score is " + finalScore;
                    finalScoreGreeting.textContent = "Enter your initials below:";
                    finalScoreButton.textContent = "SUBMIT";
    
                    finalScoreButton.setAttribute("type", "button");
        
                    body.appendChild(finalScorePageHeader);
                    finalScorePageHeader.appendChild(finalScoreGreeting);
                    finalScorePageHeader.appendChild(finalScoreEntry);
                    finalScorePageHeader.appendChild(finalScoreButton);
    
                    function storeUserDetails(event) {
                        event.preventDefault();
                        localStorage.setItem("User Initials", JSON.stringify(finalScoreEntry.value));
                    }
                    finalScoreButton.addEventListener("click", storeUserDetails);
                    }
                }
            }
        }
    }   
}

        // TO DO LIST: 
        // IT'S NOT KEEPING SCORE CORRECTLY! 
        // have to add another couple questions
        // have to link to the scores page (at least from the final page)