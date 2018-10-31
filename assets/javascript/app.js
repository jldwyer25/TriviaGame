var correctAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
var countStartNumber = 30;
var card = $("#quiz-area");

//SET THEM QUESTIONS

var questions = [{
    quesiton: "What was the first full length CGI movie?",
    answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "Cars"],
    rightAnswer: "Toy Story",
    image: "assets/images/toystory.gif",
},{
    question: "Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Fred Spice","Sporty Spice", "Posh Spice", "Scary Spice"],
    rightAnswer: "Fred Spice",
    image: "assets/images/spicegirls.gif",
},{
    question: "Which of these NBA teams held the most titles through the 1990's?",
    answers: ["The Lakers", "The Supersonics", "The Bulls", "The Timberwolves"],
    rightAnswer: "The Bulls",
    image: "assets/images/bulls.gif",
},{
    question: "What was the name of the principal in Saved by the Bell?",    
    answers: ["Mr. Feeny", "Mr. Belding", "Dr. Brown", "Mrs. Robinson"],
    rightAnswer: "Mr. Belding",
    image: "assets/images/belding.gif",
},{
    question: "In the Fresh Prince of Bel-Air, what did the license plate of the taxi say?",
    answers: ["DICE", "SPORTY", "FREEKY", "FRESH"],
    rightAnswer: "FRESH",
    image: "assets/images/fresh.gif"
},{
    question: "What animated movie featured the song 'The Circle of Life'?",
    answers: ["Mulan", "Hercules", "The Lion King", "Spiderman"],
    rightAnswer: "The Lion King",
    image: "assets/images/lionking.gif",
},{
    question: "Who wrote the hit song 'Heart Shaped Box'?",
    answers: ["Stone Sour", "Hole", "Nirvana", "Will Smith"],
    rightAnswer: "Nirvana",
    image: "assets/images/nirvanabark.gif",
},{
    question: "Who was Doug's best friend in 'DOUG'?",
    answers: ["Skeeter", "Scooter", "Barnabus", "Doug 2"],
    rightAnswer: "Skeeter",
    image: "assets/images/skeeter.gif",
}];
