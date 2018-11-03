
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


var countStartNumber = 30;
var card = $("#quiz-area");



$(document).on("click", "#start-over", function(j) {
    game.reset();
  });


  $(document).on("click", ".answer-button", function(j){
    game.clicked(j);
});

$(document).on("click", "#start", function(j){
    $("#timer").append("<h4>Time Remaining: "+countStartNumber+"</h2>");
    game.loadQuestion();
})


var game = {
    questions:questions,
    currentQuestion:0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function(){
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter===0){
            console.log("times up, fool");
            game.timesUp();
        }
    },

    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000)
        card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
        for (var i=0; i<questions[this.currentQuestions].answers.length;i++){
            card.append('<button class="answer-button" id=button'+ 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
        }
    },
    nextQuestion: function(){
        game.counter=countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timesUp: function(){
        clearInterval(timer);
        $("#counter-number").html(game.counter);
        card.html("<h2> TIMES UP</h2>");
        card.append('<h4> Correct Answer is: ' + questions[this.currentQuestion].correctAnswer);
        card.append('<img src="' + questions[this.currentQuestion].image + '"/>');

        if (game.currentQuestion === questions.length - 1){
            setTimeout(game.result, 3000);
        } else {
            setTimeout(game.nextQuestion, 3000);
        }
    },
    result: function(){
        clearInterval(timer);

        card.html("<h2> Quiz Complete:</h2>");
        $("#counter-number").html(game.counter);
        card.append("<h3>Correct: " + game.correct + "</h3>");
        card.append("<h3>Incorrect: " + game.incorrect + "</h3>")
        card.append("<h3>Unanswered: " + game.unanswered + "</h3>");
        card.append('<button id="restart">Restart?</button>');
    },
    clicked:function(j) {
        clearInterval(timer);

        if($(j.target).data("name")===questions[this.currentQuestion].correctAnswer){
            this.answeredCorrectly();
            } else{
                this.answeredIncorrectly();
            }
        },

        answeredCorrectly: function(){
            clearInterval(timer);
            game.correct++;
            card.html('<h2>Correct!</h2>')
            card.append('<img src="'+questions[game.currentQuestion].image+'"/>');

            if(game.currentQuestion===questions.length-1){
                setTimeout(game.result,3000);
            }else{
                setTimeout(game.nextQuestion, 3000);
            }
        },
        reset: function(){
            this.currentQuestion = 0;
            this.counter = countStartNumber;
            this.correct = 0;
            this.incorrect = 0;
            this.loadQuestion();
        }

    };






















//     function countdown () {
//         countStartNumber=30;
//         countStartNumber--;
//         if (countStartNumber <= 0) {
//             console.log("Time's up!");
//             //timesUp();
//         }
//     };


//     function loadQuestion() {
//         countStartNumber = setInterval(countdown, 30000);
//         $("#sub-wrapper").append("<h2>" + [questions.question] + "</h2>");
//         $("#timer").html("<h3>" + countStartNumber + "</h3>");
//         for (var i = 0; i < questions.length; i++) {
//             $("#subwrapper").append('<button class="answer-button" id="button-' + [i] + '" data-name="' + questions[currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
//         }
//     }


// var setIntervalId;
// var setTimeoutId;

// $('#start').on('click', function () {
//     $(this).hide();
//     loadQuestion();
// });

// $('#start-over').on('click', function () {
//     $(this).hide();
//     newGame();
// });

// function newGame() {
//     $('')
// }

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