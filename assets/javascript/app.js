// Create object array holding my question, choices, and correct answer
var questions = [
	{
		question: "The United Kingdom is comprised of how many countries?",
		choices: ["8", "5", "4", "6"],
		answer: "4",
	},
	{
		question: "Which of the following countries do not border France?",
		choices: ["Germany", "Netherlands", "Spain", "Italy"],
		answer: "Netherlands"
	},
	{
		question: "Between which two countries/states is the Bering Strait located?",
		choices: ["Finland and Sweden", "Alaska and Russia", "France and England"],
		answer: "Alaska and Russia"
	},
	{
		question: "Which U.S. state is the Grand Canyon located in?",
		choices: ["New Mexico", "Arizona", "Nevada", "Wyoming"],
		answer: "Arizona"
	},
	{
		question: "True or False: Iceland is covered in ice.",
		choices: ["True", "False"],
		answer: "False"
	},
	{
		question: "Which is the world's highest mountain?",
		choices: ["K2", "Makalu", "Kilimanjaro", "Mount Everest"],
		answer: "Mount Everest"
	},
	{
		question: "The biggest desert in the world is. . ?",
		choices: ["Arabian", "Sahara", "Great Australian"],
		answer: "Sahara"
	},
	{
		question: "What is the approximate size of Earth's equator?",
		choices: ["31,069 mi", "18,641 mi", "12427 mi", "24855 mi"],
		answer: "24855 mi"
	},
	{
		question: "This specifies a location’s distance north or south of the equator.",
		choices: ["Latitude", "Longitude"],
		answer: "Latitude"
	},
	{
		question: "Which is the longest river in the U.S.?",
		choices: ["Colorado River", "Yukon River", "Missouri River"],
		answer: "Missouri River"
	}	
];

// Just ensuring that my js file is connected to the html
console.log('hello');

// Creating timer
var intervalId;

// Could I create a timer that shows the time in minutes and seconds?
// var timer = {

// 	time: 120
// 	// Start of the timer should be 2 minutes and count down.
// 	// $("#timer").prepend("02:00");
// };

var time = 10;
// var timer = setTimeout(function() {

// });

function run() {
	intervalId = setInterval(decrement, 1000);
};

function decrement() {
	time--;
	$("#timer").html("<h3>Seconds remaining:<br>" + time + "</h3>");
	if (time === 0){
		alert("Times up!")
		$("#game").hide();
		$("#submit").hide();
		$("#timer").hide();
		// I could definitely could consolidate all of this code if I wanted to
		$("#stats").append("<h2>All Done!</h2");
		$("#stats").append("<h3>" + "Correct Answers: " + correctAnswers + "</h3");
		$("#stats").append("<h3>" + "Incorrect Answers: " + incorrectAnswers + "</h3");
		$("#stats").append("<h3>" + "Unanswered: " + unanswered + "</h3");
	}
};

// jQuery to run game when we click the "start" button.
$("#start").click(function() {
	// Hide the start button
	$("#start").hide();
	// Looping through each index (an object) in the questions array 
	for (i = 0; i < questions.length; i++) {
		//  Appending the value of the 'question' key and appending it
		$("#game").append(questions[i].question + "<br>");
			// Looping through each object in the questions array to display the value at the 'choices' key
			for (j = 0; j < questions[i].choices.length; j++){
				// Appending the values at the choices key and applying a radio button
				$("#game").append("<input type='radio' name='" + questions[i].answer + "' value='" + questions[i].choices[j] + "'>" 
					+ questions[i].choices[j] + "<br>");
		}
	}
	// Run the timer when the start button is clicked
	run();
	// Dynamically adding a 'submit' button into the submit div, to be displayed after the questions
	$("#submit").append("<button id='submit-button' class='btn btn-success' type='button'>Submit!</button>");
});

// Variables to compare correct/incorrect/unaswered questions and answers
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 10;

// // jQuery to stop game when we click the "submit" button.
$("#submit").click(function() {
	$("#game").hide();
	$("#submit").hide();
	stop();
	$("#timer").hide();
	$("#stats").append("<h2>All Done!</h2");
	$("#stats").append("<h3>" + "Correct Answers: " + correctAnswers + "</h3");
	$("#stats").append("<h3>" + "Incorrect Answers: " + incorrectAnswers + "</h3");
	$("#stats").append("<h3>" + "Unanswered: " + unanswered + "</h3");


	console.log("Is this working?");
});

// Stats page should display after timer is done or submit button is clicked
// Need to compare choice selcted against correct answer and update the stats accordingly
var choice = getElementById(value(questions[i].choices[j]));
if (choice === questions[i].answer){
	correctAnswers++;
	unanswered--;
}else {
	incorrectAnswers++;
	unanswered--;
}
