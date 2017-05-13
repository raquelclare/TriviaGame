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
// Variable for the interval
var intervalId;

// Could I create a timer that shows the time in minutes and seconds?
// var timer = {
// 		time: 120
// 	// Start of the timer should be 2 minutes and count down.
// 	// $("#timer").prepend("02:00");
// };

// Time set to 120 seconds
var time = 10;
// Function run that starts my timer after 1 second after the start button is clicked (see below)
function run() {
	// Setting the interval to the decrement function after 1 second
	intervalId = setInterval(decrement, 1000);
};
// Function decrement to decrease my second left (time) by 1 every second
function decrement() {
	time--;
	// Adds the HTML into timer div
	$("#timer").html("<h3>Seconds remaining:<br>" + time + "</h3>");
	// When time is equal to zero--> alert and go to the stats page
	if (time === 0) {
		alert("Times up!")
		// Calls the renderStats function (below)
		renderStats();
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
				// var value = questions[i].choices[j];
				$("#game").append("<input type='radio' name='" + questions[i].answer + "' id='" + questions[i].choices[j] + "'>" 
					+ questions[i].choices[j] + "<br>");
				// var choice = $('input[name="' + questions[i].choices[j] + '"]:checked').val();
				// console.log(choice);
			}
	}
	// Run the timer when the start button is clicked
	run();
	// Dynamically adding a 'submit' button into the submit div, to be displayed after the questions
	$("#submit").append("<button id='submit-button' class='btn btn-success' type='button'>Submit!</button>");
});


//console.log(choice);

// var choice = $("#'" + questions[i].choices[j] + "'").on("click", function() {
// 	console.log(questions[i].choices[j]);
// })
//getElementById(value(questions[i].choices[j]));

// var choice = $('input[name="' + questions[i].answer + '"]:checked').val();
// console.log(choice);

// Variables to compare correct/incorrect/unaswered questions and answers
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 10;

// // jQuery to stop game when we click the "submit" button.
$("#submit").click(function() {
	// Stops the timer so that you no longer receive an alert and it doesnt append another stats div
	clearInterval(intervalId);
	// Calls the renderStats function to take you to the stats page
	renderStats();
	console.log("Is this working?");

});

// Stats page should display after timer is done or submit button is clicked
// Need to compare choice selcted against correct answer and update the stats accordingly
function answer() {
	var choice = $("input").on( "click", function() {
 		// $('input[name="' + questions[i].choices[j] + '"]:checked').val();
				console.log(choice);
if (choice === questions[i].answer){
	correctAnswers++;
	unanswered--;
}else {
	incorrectAnswers++;
	unanswered--;
	}
})
};

// Takes you to the Stats page when renderStats is called (submit button or after timer runs out)
function renderStats() {
	// Hiding the game, submit and timer divs
	$("#game").hide();
	$("#submit").hide();
	$("#timer").hide();
	// Appending the HTML needed to display results
	$("#stats").append("<h2>All Done!</h2");
	$("#stats").append("<h3>" + "Correct Answers: " + correctAnswers + "</h3");
	$("#stats").append("<h3>" + "Incorrect Answers: " + incorrectAnswers + "</h3");
	$("#stats").append("<h3>" + "Unanswered: " + unanswered + "</h3");
};

