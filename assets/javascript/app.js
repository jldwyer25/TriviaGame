
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
//global variables for counter & where i want my items to display

var countStartNumber = 30;
var card = $("#quiz-area");

//when clicked the startover button, game resets

$(document).on("click", "#restart", function(j) {
    game.reset();
  });

//this lets the quiz know an answer has been clicked
  $(document).on("click", ".answer-button", function(j){
    game.clicked(j);
});


//this is for starting the game, loading quetions
$(document).on("click", "#start", function(j){
    $("#timer").append("<h4>Time Remaining: "+countStartNumber+"</h2>");
    game.loadQuestion();
})

//put game variables in an object so that they can be referred to as this or pulled from the original array

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
            game.unanswered++;
            game.timesUp();
        }
    },
//this works^^

//to load a question and display in the quiz area
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000)
        console.log(questions[game.currentQuestion].question);
        console.log(questions[game.currentQuestion].answers);
        console.log(questions[game.currentQuestion].rightAnswer);
        card.html("<h2>" + questions[game.currentQuestion].question + "</h2>");
        for (var i=0; i<questions[game.currentQuestion].answers.length;i++){
            //THIS IS MY PROBLEM BELOW
            // card.append("<button class='answer-button' id='button' data-name=" + questions[game.currentQuestion].answers[0] + " >" + questions[this.currentQuestion].answers[i]+ "</button>");
            var button = $("<button>");
            button.addClass("answer-button");
            button.attr("data-name",questions[game.currentQuestion].answers[i]);
            button.text(questions[game.currentQuestion].answers[i]);
            card.append(button);
        }
    },
    //how to get question after question
    nextQuestion: function(){
        game.counter=countStartNumber;
        $("#counter-number").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    // if no answer has been selected, times up
    timesUp: function(){
        clearInterval(timer);
        $("#counter-number").html(game.counter);
        card.html("<h2> TIMES UP</h2>");
        card.append('<h4> Correct Answer is: ' + questions[game.currentQuestion].rightAnswer);
        card.append('<img src="' + questions[game.currentQuestion].image + '"/>');

        //display the gif for 3 sec
        if (game.currentQuestion === questions.length - 1){
            setTimeout(game.result, 3000);
        } else {
            setTimeout(game.nextQuestion, 3000);
        }
    },
    //for the end of the game
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
//verify the answer is correct or incorrect
        if($(j.target).data("name")===questions[game.currentQuestion].rightAnswer){
            game.answeredCorrectly();
            } else{
                game.answeredIncorrectly();
            }
        },

        answeredCorrectly: function(){
            clearInterval(timer);
            game.correct++;
            card.html('<h2>Correct!</h2>');
            card.append('<img src="'+questions[game.currentQuestion].image+'"/>');

            if(game.currentQuestion===questions.length-1){
                game.correct++;
                setTimeout(game.result,3000);
            }else{
                setTimeout(game.nextQuestion, 3000);
            }
        },

        answeredIncorrectly: function(){
            clearInterval(timer);
            game.incorrect++;
            card.html('<h2>Incorrect!</h2>');
            card.append('<h4> The Correct Answer Was: ' + questions[game.currentQuestion].rightAnswer);
            card.append('<img src="'+questions[game.currentQuestion].image+'"/>');
            if(game.currentQuestion===questions.length-1){
                game.incorrect++;
                setTimeout(game.result,3000);
            }else{
                setTimeout(game.nextQuestion, 3000);
            }
        },

    

        // when game is reset
        reset: function(){
            this.currentQuestion = 0;
            this.counter = countStartNumber;
            this.correct = 0;
            this.incorrect = 0;
            this.loadQuestion();
        }

    };


