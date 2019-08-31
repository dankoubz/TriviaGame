// Boku No Hero Trivia Game

// Instructions

// time based game
// display a question with results
// once answered jump to the next question
// timer works independantly to each question
// after user completes the quiz, showcase correct and incorrect answers

// global vars
var correct = 0; // correct answers
var incorrect = 0; // incorrect answers
var questionOrderStatus = 0; // current question number for user
var userGuess;
var value;
var tempNumb = 0;

// questions + answers global scope
var myQuestions = [{
        number: "Question 1",
        question: "What is Aizawa's hero name?",
        image: "assets/images/q1.png",
        answers: {
            a: "Eraserhead",
            b: "Sleepyhead",
            c: "Eraserstraps",
            d: "Captain Exhausted"
        },
        correctAnswer: "a",
        incorrectAnswer: ["b", "c", "d"]
    },
    {
        number: "Question 2",
        question: "Who did Tsuyu team up with in the final exam?",
        image: "assets/images/q2.png",
        answers: {
            a: "Minoru Mineta",
            b: "Fumikage Tokoyami",
            c: "Denki Kaminari",
            d: "Momo Yaoyorozu"
        },
        correctAnswer: "b",
        incorrectAnswer: ["a", "c", "d"]
    },
    {
        number: "Question 3",
        question: "What position did Mineta get in the final exam?",
        image: "assets/images/q3.png",
        answers: {
            a: "7th",
            b: "8th",
            c: "9th",
            d: "10th"
        },
        correctAnswer: "c",
        incorrectAnswer: ["a", "b", "d"]
    },
    {
        number: "Question 4",
        question: "What's the name of the group within the League Of Villains that Dabi leads?",
        image: "assets/images/q4.png",
        answers: {
            a: "Vangaurd Action Squad",
            b: "Frontier Action Squad",
            c: "Vangaurd Attack Squad",
            d: "Frontier Attack Squad"
        },
        correctAnswer: "a",
        incorrectAnswer: ["b", "c", "d"]
    },
    {
        number: "Question 5",
        question: "At what time is Tokoyami at his strongest?",
        image: "assets/images/q5.png",
        answers: {
            a: "Dusk",
            b: "Day",
            c: "Dawn",
            d: "Night"
        },
        correctAnswer: "d",
        incorrectAnswer: ["a", "b", "c"]
    },
    {
        number: "Question 6",
        question: "What chemical is the reason behind Bakugo's explosions?",
        image: "assets/images/q6.png",
        answers: {
            a: "Glycerol",
            b: "Nitroglycerin",
            c: "Isosorbide Dinitrate",
            d: "Nitrate"
        },
        correctAnswer: "b",
        incorrectAnswer: ["a", "c", "d"]
    },
    {
        number: "Question 7",
        question: "Who does Toga have a crush on?",
        image: "assets/images/q7.png",
        answers: {
            a: "Iida",
            b: "Bakugo",
            c: "Tordoroki",
            d: "Midoriya"
        },
        correctAnswer: "d",
        incorrectAnswer: ["a", "b", "c"]
    },
    {
        number: "Question 8",
        question: "Which successor of One For All is Izuku Midoriya?",
        image: "assets/images/q8.png",
        answers: {
            a: "Seventh",
            b: "Eighth",
            c: "Ninth",
            d: "Tenth"
        },
        correctAnswer: "c",
        incorrectAnswer: ["a", "b", "d"]
    },

];

// function on load call intialise game
window.onload = function() {
    // on click event to start game
    $("#startGame").on("click", function() {
        $("#welcomeScreen").addClass("d-none");
        $("#triviaGame").removeClass("d-none").addClass("d-block");
    });

    intialiseGame();
    clickAnswerBtns();
}

// function to display quiz
function displayQuestionsAnswers(game) {

    // set i to var to influence question numbers
    console.log("Step 1: " + questionOrderStatus + " Order of Quiz");
    var i = questionOrderStatus;

    if (game === "start") {
        // append html doc with quiz data
        $("#qNumb").html(myQuestions[i].number); // question number string
        $("#question").append(myQuestions[i].question); // question string
        $("#qImg").append("<img style='height: 250px' class='rounded' src='" + myQuestions[i].image + "'>")
        $("#answerA").append(myQuestions[i].answers.a); // answer a
        $("#answerB").append(myQuestions[i].answers.b); // answer b
        $("#answerC").append(myQuestions[i].answers.c); // answer c
        $("#answerD").append(myQuestions[i].answers.d); // answer d

        // call function
        // clickAnswerBtns();
        console.log("Step 2: added html for quiz! + call click event");
    }

}

// function to change state of questions, add delay + animate
function nextQuizQuestion() {

    // set i to var to influence question numbers
    console.log("Step 7.5: " + questionOrderStatus + " Order of Quiz");
    var i = questionOrderStatus;

    // if letter clicked matches object array answer
    if (userGuess === myQuestions[i].correctAnswer) {
        console.log("Step 8a: User Guess = " + userGuess + " Correct Answer = " + myQuestions[i].correctAnswer);
        console.log("Step 9a: letter is correct run statement");

        correct += 1;
        userGuess = "";
        questionOrderStatus = questionOrderStatus + 1;
        console.log("Step 10a: Add correct value = " + correct);
        console.log("Step 11a: Empty userGuess = " + userGuess);
        console.log("Step 12a: Question Order Status = " + questionOrderStatus);

        setTimeout(delayNextQuestion, 500);

        function delayNextQuestion() {
            console.log("Step 13a: call function re-intialise the game, pass parameter");
            intialiseGame("quiz");
        }
    }

    if (userGuess === myQuestions[i].incorrectAnswer[0] ||
        userGuess === myQuestions[i].incorrectAnswer[1] ||
        userGuess === myQuestions[i].incorrectAnswer[2]) {
        console.log("Step 8b: User Guess = " + userGuess + " !== Correct Answer = " + myQuestions[i].correctAnswer);
        console.log("Step 9b: letter is correct run statement");

        incorrect += 1;
        userGuess = "";
        questionOrderStatus = questionOrderStatus + 1;
        console.log("Step 10b: Add incorrect value = " + incorrect);
        console.log("Step 11b: Empty userGuess = " + userGuess);
        console.log("Step 12b: Question Order Status = " + questionOrderStatus);

        setTimeout(delayNextQuestion, 500);

        function delayNextQuestion() {
            console.log("Step 13b: call function re-intialise the game, pass parameter");
            intialiseGame("quiz");
        }
    }

    if (questionOrderStatus === 8) {
        console.log("Step 17: call function to display results");

        $("#triviaGame").removeClass("d-block").addClass("d-none");
        $("#showResults").removeClass("d-none").addClass("d-block");

        $("#results").empty();
        var result = (correct / 8 * 100) + "%";
        $("#results").append(result);

        questionOrderStatus = 0;
        setTimeout(delayNextQuestion, 7000);

        function delayNextQuestion() {
            console.log("Step 18: call function re-intialise the game, pass parameter");

            console.log("Step 19: fired click!");
            $("#showResults").removeClass("d-block").addClass("d-none");
            $("#triviaGame").removeClass("d-none").addClass("d-block");

            intialiseGame("quiz");
            // intialiseGame("play again");
        }

        // displayResults();
    }

}





// function to track score - track correct / incorrect 
// function keepQuizScoreCount(guess)



// function timer
// on each question give a timer of 15s
// if timer not met, skip to next question

// display results screen
// show correct and incorrect number
// function displayResults() {


// }




// quiz click functionality fire event!
function clickAnswerBtns() {
    $("button.btn-quiz").on("click", function() {
        console.log("Step 3: Your click event is fired!");
        // get value of the button
        userGuess = "";
        console.log("Step 4: User Guesses cleared to - " + userGuess);

        userGuess = this.value;
        console.log("Step 5: User Guesses set to - " + userGuess);

        // style button and disable other buttons
        $(this).addClass("active");
        $("button.btn-quiz").attr("disabled", "disabled");
        console.log("Step 6: Change buttons to disabled");

        console.log("Step 7: Call functoin to see if correct, pass parameter user Guess - " + userGuess);
        nextQuizQuestion(userGuess);
    });
}

// intailise game
function intialiseGame(refresh) {

    if (refresh === "quiz") {
        console.log("Step 14: Successfully passed parameter to reinitalis game");
        // empty html to append with new data
        $("button.btn-quiz").empty();
        $("button.btn-quiz").removeClass("active");
        $("button.btn-quiz").removeAttr("disabled", "disabled");
        $("#qNumb").empty();
        $("#question").empty();
        $("#qImg").empty();
        console.log("Step 15: all html elements cleared");
        // empty array
        userGuess = "";
        console.log("Step 16: Empty userGuess = " + userGuess);

    }



    console.log("Step 0: call function");
    displayQuestionsAnswers("start");
}