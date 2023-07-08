function addHighScores() {
    var scores = JSON.parse(localStorage.getItem("High Score"));
    document.getElementById("scores").innerHTML = "High Score:   " + scores;

    var initials = JSON.parse(localStorage.getItem("User Initials"));
    document.getElementById("initials").innerHTML = "User Initals:   " + initials;
}
addHighScores();