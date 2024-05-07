var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level=0;
var gameStarted = false;

function nextSequence(){
    level++;
    $("#level-title").text("Level " + (level));

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    console.log(gamePattern);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
    
    setTimeout(function() {
        userClickedPattern = []; // Reset user pattern for next level
    }, 1000);
}

$(document).on("keydown",function(){
    if (!gameStarted) {
        gameStarted = true;
        nextSequence();
    }
});

$(".btn").on("click",function (){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);
    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
})


function animatePress(color){
    $("#"+ color).addClass("pressed");
    setTimeout( function(){
        $("#"+ color).removeClass("pressed")
    }, 100)
}
function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function checkAnswer(userIndex){
    if(gamePattern[userIndex] === userClickedPattern[userIndex]){
        console.log("correct");
    }else{
        console.log("wrong");
    }
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("correct");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        playSound("wrong");
        gameStarted = false;
        level = 0;
        gamePattern=[];
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
    }
}