
var beginButton = document.querySelector("#beginButton");
var startPage = document.querySelector("#startPage");

Quiz();

function Quiz() {
    beginButton.addEventListener("click", function(){
        startPage.style.display = "none";
        runQuiz();

    })
}

    function runQuiz () {
        firstQuestion();
        function firstQuestion () {
            var question1 = document.createElement("h2");
            var answerList1 = document.createElement ("button")
            var answerList2 = document.createElement ("button")
            var answerList3 = document.createElement ("button")
            var answerList4 = document.createElement ("button")
            var body = document.body;

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
        }

    countdownTimer();
    function countdownTimer () {
        var timeLeft = 76;
        var countdown = document.querySelector("#countdown");
        
        var timeInterval = setInterval(function (){
            timeLeft--;
            countdown.textContent = timeLeft;
            if (timeLeft === 0) {
                clearInterval(timeInterval);
                countdown.textContent = " ";
                countdown.setAttribute("style", "color:red");
        }
    }, 1000);

}



    // here we'll code what actually happens once the user clicks on the begin button
}


// start with a basic screen that asks if the user wants to take the coding quiz (5,6, and 7 talk about js coding over html)
// timer starts, housed in the upper right-hand corner of the screen. (9 and 10 are about timers) The timer is tied to the answers- if you answer incorrectly, you are docked x seconds (i-x, most likely?)
// add link to "view high scores" in the upper left-hand corner of the screen- this will need an event listener to know when it's clicked, two buttons once it shows up on the screen to allow you to go back. This has to hold the initials and the high scores until a user clears the high  -(21 and 22 at least, we're looking to store those in localstorage in the browsercd ). maybe use the example from 11 to click to and from this screen? 
// the quiz itself is a series of questions, has to event listen to see if the correct question answer was selected. Can use keydown and keyup to listen for the correct answer number (16), or listen for a mouse click (12) and assign the changes to the element using dot notation...  Using buttons of numbered lists? 
// when the timer reaches zero, it should show the score of the user and a chance for the user to enter their initials (see 13, 14 & 15 for the form entry)
