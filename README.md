# Abe's Javascript Code Quiz

[This Javascript Code Quiz](https://aomaits.github.io/javascriptCodeQuiz) is a quiz over a few fundamental Javascript topics. 

There are currently only 3 questions. Future versions could have more questions, increased design flexibility, and the option to store multiple user's scores. 

![Quiz Screen](/assets/quizScreen.jpg "Snip of the quiz screen")
![Score Screen](/assets/scoreScreen.jpg "Snip of the score screen")

## How It Works
The webpage opens on a greeting screen. Users can click a button to start the quiz. Along with the quiz, a timer also begins. Questions are then rendered to the user's browser dynamically using Javascript. After either time runs out or the user has progressed through all of the questions, the user is shown their final score. The final score is calculated by adding the total correct answers to the time remaining. Users receive one point for all correct answers, are docked one point for incorrect answers, and receive an additional point for every 5 seconds remaining on the clock. For example, completing the quiz with 10 seconds left and only one of the three answers correct, our user will receive a final score of 1. 

A final score can then be saved by the user along with their initials and can be accessed later. From the high scores screen, users can navigate back to the start of the quiz. 

## Usage
This quiz is intended for practicing basic Javascript principles. 

## Credits
N/A

## License
This repository uses a standard [MIT License.](https://github.com/aomaits/javascriptCodeQuiz/blob/main/LICENSE)
