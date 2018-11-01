



// var correctAnswer = 0;
// var wrongAnswer = 0;
// var unanswered = 0;
// var countStartNumber = 30;
// var card = $("#quiz-area");

//SET THEM QUESTIONS

var questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "Cars"],
    rightAnswer: "Toy Story",
    image: "assets/images/toystory.gif",
}, {
    question: "Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Fred Spice", "Sporty Spice", "Posh Spice", "Scary Spice"],
    rightAnswer: "Fred Spice",
    image: "assets/images/spicegirls.gif",
}, {
    question: "Which of these NBA teams held the most titles through the 1990's?",
    answers: ["The Lakers", "The Supersonics", "The Bulls", "The Timberwolves"],
    rightAnswer: "The Bulls",
    image: "assets/images/bulls.gif",
}, {
    question: "What was the name of the principal in Saved by the Bell?",
    answers: ["Mr. Feeny", "Mr. Belding", "Dr. Brown", "Mrs. Robinson"],
    rightAnswer: "Mr. Belding",
    image: "assets/images/belding.gif",
}, {
    question: "In the Fresh Prince of Bel-Air, what did the license plate of the taxi say?",
    answers: ["DICE", "SPORTY", "FREEKY", "FRESH"],
    rightAnswer: "FRESH",
    image: "assets/images/fresh.gif"
}, {
    question: "What animated movie featured the song 'The Circle of Life'?",
    answers: ["Mulan", "Hercules", "The Lion King", "Spiderman"],
    rightAnswer: "The Lion King",
    image: "assets/images/lionking.gif",
}, {
    question: "Who wrote the hit song 'Heart Shaped Box'?",
    answers: ["Stone Sour", "Hole", "Nirvana", "Will Smith"],
    rightAnswer: "Nirvana",
    image: "assets/images/nirvanabark.gif",
}, {
    question: "Who was Doug's best friend in 'DOUG'?",
    answers: ["Skeeter", "Scooter", "Barnabus", "Doug 2"],
    rightAnswer: "Skeeter",
    image: "assets/images/skeeter.gif",
}];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correctAnswer: 0,
    wrongAnswer: 0,
    countdown: function () {
        game.counter--;
        if (game.counter <= 0) {
            console.log("Time's up!");
            game.timesUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $("#sub-wrapper").html("<h2>" + question[game.currentQuestion].question + "</h2>");
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#subwrapper").append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    timesUp: function () {

    },

    results: function () {

    },
    clicked: function () {

    },
    answeredCorrectly: function () {

    },
    answeredIncorrectly: function () {

    },
    newGame: function () {

    }

};

var setIntervalId;
var setTimeoutId;

$('#start').on('click', function () {
    $(this).hide();
    game.loadQuestion();
});

$('#start-over').on('click', function () {
    $(this).hide();
    newGame();
});

function newGame() {
    $('')
}

// function questTimer(){
//     setIntervalId=setInterval(function(){
//         $("#quiz-area").html(question);
//     }, 30000);
// }

// function gameStart(){
//     clearInterval(setIntervalId);
//     setIntervalId = setInterval(getQuestion, 30000);
//     function getQuestion(){

//     }
// };