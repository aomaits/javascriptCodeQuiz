
var beginButton = document.querySelector("#beginButton");
var startPage = document.querySelector("#startPage");

Quiz();

function Quiz() {
    beginButton.addEventListener("click", function(){
        startPage.style.display = "none";
        runQuiz();

    })
}
    // change this value to false to stop the clock
    var timeRemains=true;
    var finalScore;   

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
        var question1 = null;
        var body = null;
        
        var timeLeft = 21;
            
        firstQuestion();
        function firstQuestion () {
            countdownTimer();
            question1 = document.createElement("h2")
            var answerList1 = document.createElement ("button")
            var answerList2 = document.createElement ("button")
            var answerList3 = document.createElement ("button")
            var answerList4 = document.createElement ("button")
            var totalCorrect = 0;
            var totalIncorrect = 0;
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

            answerList3.addEventListener("click", correctResponse);
            answerList1.addEventListener("click", incorrectResponse);
            answerList2.addEventListener("click", incorrectResponse);
            answerList4.addEventListener("click", incorrectResponse);

        function incorrectResponse () {
            totalIncorrect = totalIncorrect + 1;
            totalCorrect = totalCorrect - totalIncorrect

            loadScoreScreen();
            function loadScoreScreen () {
                calculateFinalScore ();
                // stops the clock and hides it
                timeRemains = false;
                countdown.setAttribute("style", "display:none");
    
                // hides the question and its answers
                question1.setAttribute("style", "display:none");
                var finalScorePageHeader = document.createElement("h2");
                var finalScoreGreeting = document.createElement("p");
                var finalScoreEntry = document.createElement("input");

                function calculateFinalScore () {                
                    if (totalCorrect <0) {
                        totalCorrect = 0;
                    }
                    finalScore = totalCorrect + (Math.floor((timeLeft/5)));
                    console.log("final score is: " + finalScore);
                    console.log(timeLeft);
                    console.log(totalCorrect);
                }
    
                finalScorePageHeader.textContent = "Great Work!";
                finalScoreGreeting.textContent = "Your final score is " + finalScore;

                finalScoreEntry.setAttribute("type", "text");
    
                body.appendChild(finalScorePageHeader);
                finalScorePageHeader.appendChild(finalScoreGreeting);
                finalScorePageHeader.appendChild(finalScoreEntry);
            }
        }

        function correctResponse () {
            totalCorrect = totalCorrect + 1;            
            totalCorrect = totalCorrect - totalIncorrect
            
            loadScoreScreen();
            function loadScoreScreen () {
                calculateFinalScore ();
                // stops the clock and hides it
                timeRemains = false;
                countdown.setAttribute("style", "display:none");
    
                // hides the question and its answers
                question1.setAttribute("style", "display:none");
                var finalScorePageHeader = document.createElement("h2");
                var finalScoreGreeting = document.createElement("p");
                var finalScoreEntry = document.createElement("input");

                function calculateFinalScore () {  
                    if (totalCorrect <0) {
                        totalCorrect = 0;
                    }              
                    finalScore = totalCorrect + (Math.floor((timeLeft/5)));
                    console.log("final score is: " + finalScore);
                    console.log(timeLeft);
                    console.log(totalCorrect);
                }
    
                finalScorePageHeader.textContent = "Great Work!";
                finalScoreGreeting.textContent = "Your final score is " + finalScore;

                finalScoreEntry.setAttribute("type", "text");
    
                body.appendChild(finalScorePageHeader);
                finalScorePageHeader.appendChild(finalScoreGreeting);
                finalScorePageHeader.appendChild(finalScoreEntry);
            }
        }
        
        // TO DO LIST: 
        // Capture the final score, stash that in local storage
        // Get an input from the form (user's initials), stash that in local storage
        // create the scores page (separate HTML file, hence separate JS file?), button to link back to the main page from there too, "get" values from the local storage, scores stacked up based on highest to low in the array? 
        // Add link to the scores page from the initiation
        // CSS styling for the quiz itself

    }
    



    // here we'll code what actually happens once the user clicks on the begin button
}
