
var questions = [
	{
		question: "The United Kingdom is comprised of how many countries?",
		choices: ["8", "5", "4", "6"],
		answer: "4"
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
		answer: ["Sahara"]
	},
	{
		question: "What is the approximate size of Earth's equator?",
		choices: ["31,069 mi", "18,641 mi", "12427 mi", "24855 mi"],
		answer: ["24855 mi"]
	},
	{
		question: "This specifies a location’s distance north or south of the equator.",
		choices: ["Latitude", "Longitude"],
		answer: ["Latitude"]
	},
	{
		question: "Which is the longest river in the U.S.?",
		choices: ["Colorado River", "Yukon River", "Missouri River"],
		answer: ["Missouri River"]
	}	
];
// Just ensuring that my js file is connected to the html
console.log('hello');
// var intervalId;

// var timer = {

// 	time:
// 	// Start of the timer should be 2 minutes and count down.
// 	$("#timer").html("02:00");
// };

// jQuery to run game when we click the "start" button.

$("#start").click(function() {
	$("#start").hide();
	// Looping through questions obj array to display the value at the 'question' key and appending them
	for (i = 0; i < questions.length; i++) {
		$("#game").append(questions[i].question + "<br>");
			// Looping through questions obj array to display the value at the 'choices' key and appending them after the corresponding question
			for (j = 0; j < questions[i].choices.length; j++){
				$("#game").append("<form><input type='radio' value='" + questions[j].choices[j] + "'>" 
					+ questions[i].choices[j] + "</form><br>");
		}
	}
	// Dynamically adding a 'submit' button into the submit div, to be displayed after the questions
	$("#submit").append("<button id='submit-button' class='btn btn-success' type='button'>Submit!</button>");
	// .click(function(){
	// 	$("<button id='submit-button' type='button'> </button>");
});

// Variables to compare correct/incorrect/unaswered questions and answers
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 10;

// // jQuery to stop game when we click the "submit" button.
$("#submit").click(function() {
	$("#game").hide();
	$("#submit").hide();
	$("#stats").append("<h2>All Done!</h2");
	$("#stats").append("<h3>" + "Correct Answers: " + correctAnswers + "</h3");
	$("#stats").append("<h3>" + "Incorrect Answers: " + incorrectAnswers + "</h3");
	$("#stats").append("<h3>" + "Unanswered: " + unanswered + "</h3");


	console.log("Is this working?");
});



// function stopGame() {

// };

// Stats page should display after timer is done or submit button is clicked
