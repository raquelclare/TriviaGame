// Create object array holding my question, choices, and correct answer
var questions = [{
    question: "The United Kingdom is comprised of how many countries?",
    choices: ["8", "5", "4", "6"],
    answer: "4",
    name: "Q1"
}, {
    question: "Which of the following countries do not border France?",
    choices: ["Germany", "Netherlands", "Spain", "Italy"],
    answer: "Netherlands",
    name: "Q2"
}, {
    question: "Between which two countries/states is the Bering Strait located?",
    choices: ["Finland and Sweden", "Alaska and Russia", "France and England"],
    answer: "Alaska and Russia",
    name: "Q3"
}, {
    question: "Which U.S. state is the Grand Canyon located in?",
    choices: ["New Mexico", "Arizona", "Nevada", "Wyoming"],
    answer: "Arizona",
    name: "Q4"
}, {
    question: "True or False: Iceland is covered in ice.",
    choices: ["True", "False"],
    answer: "False",
    name: "Q5"
}, {
    question: "Which is the world's highest mountain?",
    choices: ["K2", "Makalu", "Kilimanjaro", "Mount Everest"],
    answer: "Mount Everest",
    name: "Q6"
}, {
    question: "The biggest desert in the world is. . ?",
    choices: ["Arabian", "Sahara", "Great Australian"],
    answer: "Sahara",
    name: "Q7"
}, {
    question: "What is the approximate size of Earth's equator?",
    choices: ["31,069 mi", "18,641 mi", "12427 mi", "24855 mi"],
    answer: "24855 mi",
    name: "Q8"
}, {
    question: "This specifies a location’s distance north or south of the equator.",
    choices: ["Latitude", "Longitude"],
    answer: "Latitude",
    name: "Q9"
}, {
    question: "Which is the longest river in the U.S.?",
    choices: ["Colorado River", "Yukon River", "Missouri River"],
    answer: "Missouri River",
    name: "Q10"
}];

// Just ensuring that my js file is connected to the html
//console.log('hello');

// Creating timer
// Variable for the interval
var intervalId;

// Time set to 120 seconds
var time = 120;
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
        // Need to check the answers
        check();
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
        for (j = 0; j < questions[i].choices.length; j++) {
            // Appending the values at the choices key and applying a radio button
            // var value = questions[i].choices[j];
            $("#game").append("<input type='radio' name='" + questions[i].name + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j] + "<br>");
            // var choice = $('input[name="' + questions[i].choices[j] + '"]:checked').val();
            // console.log(choice);
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
var unanswered = questions.length;

// // jQuery to stop game when we click the "submit" button.
$("#submit").click(function() {
    // Stops the timer so that you no longer receive an alert and it doesnt append another stats div
    clearInterval(intervalId);
    check();
    // Calls the renderStats function to take you to the stats page
    renderStats();
    // console.log("Is this working?");

});

// Stats page should display after timer is done or submit button is clicked
// Need to compare choice selcted against correct answer and update the stats accordingly
function check() {
	// debugger
	// Setting up variables for checking
	// Creating a variable to grab all radio buttons
    var radios = $("input[type='radio']");
    // Creating a variable to grab the radio button that is checked and then creating an array of only the checked radio buttons aka answers
    var choice = radios.filter(":checked").map(function() {
    // Creating an empty object where we will push all of the answered questions into
    var choicesObj = {}
    // Creating a variable equal to the 'name' attribute found in my above for loop which then points to questions[i].name which is the question number (Q1 Q2 Q3 etc)
    var questionNumber = $(this).attr("name");
    // Creating a variable equal to the value at questions[i].choices[j]
    var choiceSelected = $(this).val();
    // Creates a variable that takes questionNumber, slices the "Q" off to get just the number and then decrements by 1 to get the index of that same question. So Q1 === [0]
    var questionIndex = questionNumber.slice(-1) - 1;

    // We are now pushing into the choicesObj object by assigning key-value pairs using specific syntax:
    choicesObj.questionNumber = questionNumber;
    choicesObj.choiceSelected = choiceSelected;
    choicesObj.questionIndex = questionIndex;

    return choicesObj;
    console.log(choicesObj);
    });
    
    // console.log(choice);
    // console.log(this);
    // console.log(check);

    // Looping through choice (where the choicesObj object is stored) since it was the returned array of the questions answered by user
    for (var i = 0; i < choice.length; i++) {
    	// Creating variable to store userGuess as the value at the chosen answer
    	var userGuess = choice[i].choiceSelected;
    	// Creating variable masterIndex which take the index found in questionIndex and plugs into the choice array, returning another number
    	var masterIndex = choice[i].questionIndex;
    	// Creating variable correctAnswer such that masterIndex returns a number, that plugs into my questions array at the corresponding index, and then finds the 'answer' key and grabs the value
    	var correctAnswer = questions[masterIndex].answer;
    	// Comparing userGuess to correctAnswer, if true
    	if (userGuess === correctAnswer) {
    		// Increment the correctAnswers variable by 1, displayed on the stats page
    		correctAnswers++;
    		// Decrement unanswered variable by 1, displayed on the stats page
    		unanswered--;
    	// If false
    	}else {
    		// Incremement incorrectAnswers by 1, displayed ont he stats page
    		incorrectAnswers++;
    		// Decrement unanswered variable by 1, displayed on the stats page
    		unanswered--;
    	}
    }
}

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

// !!!!!NOTE TO TA: For some reason my Q10 is not working! It cannot find the answer for that question. If you don't select an answer for the very last
// question then it works as expected. I could not figure out the issue in time!








// ============================================================================================

// Code NOT used

// Could I create a timer that shows the time in minutes and seconds?
// var timer = {
// 		time: 120
// 	// Start of the timer should be 2 minutes and count down.
// 	// $("#timer").prepend("02:00");
// };

// if (choice === questions[i].answer){
// 	correctAnswers++;
// 	unanswered--;
// }else {
// 	incorrectAnswers++;
// 	unanswered--;
// 	}
// })
// };

//console.log(choice);

// var choice = $("#'" + questions[i].choices[j] + "'").on("click", function() {
// 	console.log(questions[i].choices[j]);
// })
//getElementById(value(questions[i].choices[j]));

// var choice = $('input[name="' + questions[i].answer + '"]:checked').val();
// console.log(choice);
