//making sure file is connected
// window.onload = function() {
// 	console.log("javascript quiz")
// }

/*
var myObj = {firstName:"Traci", 
			lastName:"Williams", 
			age:33}

document.write(myObj.firstName + ' ' + myObj.lastName); 
//write on the DOM the last name from the myObj object
*/

//javascript can use quotes or no quotes but because we are bring this object into Jason we need the quotes
//https://msdn.microsoft.com/en-us/library/bb299886.aspx


//because we will have more questions and answer we will treat this as an object array
// var myObj = [{
// 		"Question": "What color is an apple?",
// 		"Answers": ["blue", "red", "purple"],
// 		"correct": 1
// },{
// 		"Question": "What color is grass?",
// 		"Answers": ["green", "red", "purple"],
// 		"correct": 0
// }]

// document.write(myObj.Question);
// console.log(myObj);

//make into a string to make into JSON
// var myObj = '[{ "Question": "What color is an apple?", "Answers": ["blue", "red", "purple"],"correct": 1},{"Question": "What color is grass?","Answers": ["green", "red", "purple"],"correct": 0}]'
// console.log(myObj);

// need to use .parse because we don't want this entire string returned
//var myData = '[{ "Question": "What color is an apple?", "Answers": ["blue", "red", "purple"],"correct": 1},{"Question": "What color is grass?","Answers": ["green", "red", "purple"],"correct": 0}]'
//var myObj = JSON.parse(myData);
//console.log(myObj);


//now to put it on the page

// var output = document.getElementById("output");
// var myData = '[{"question":"What color is an apple","answers":["Blue","Red","Purple"],"correct":1},{"question":"What Color is Grass","answers":["Green","Red","Purple"],"correct":0}]';
// var myObj = JSON.parse(myData);

//loops through the question and prints the question on the page
// for (var i in myObj) {
//     output.innerHTML += myObj[i].question + '? <br>';
// }
// console.log(myObj);



//practice...just an object, not an object array
// var output = document.getElementById("output");
// var myObj = {firstName:"Traci", 
// 			lastName:"Williams", 
// 			age:33,
// 			house:"condo",
// 			car:"none",
// 		}

// for (var i in myObj) {
// 	output.innerHTML += myObj.firstName;
// }


//now we are making an AJAX call
var output = document.getElementById("output");
var bAnswer = document.getElementsByClassName("btnAns");//to bet access to the possible answers of the quiz
//1. we need to load all of our object information into a container
var myObj = ""; 
var page = 0; //created a container object and keeping it blank - keeps it as a global value
var correctAnswer = 0;


loadQuestions(); //calling the load questions function
console.log(myObj); //will display what's in the container object in the conosole

//2. now lets set up our AJAX call within the function
//set up a request to allow us to open up a connection to another web page which is the variable a
//then we are getting a request and using the json URL that we created and keep it true
//now we have to see about the "readyState" (or status which is 200 
//- whenever we are trying to access the data that the connection is opened and we have received some content here
//so lets make a conditional statement that says if readyState is equal to 4, then we have data and are ready to go with the quiz
//can use a.resonseText or a.response
//uncomment out console.log(a) to see the above information

/*
function loadQuestions() {
    var a = new XMLHttpRequest();
    a.open("GET", "https://api.myjson.com/bins/14v6f", true);

    if (a.readyState == 4) {
    	var myData = JSON.parse(a.responseText);
    	console.log(myData);
    	for (var i in myData) {
    		output.innerHTML += myData[i].question + '? <br>';
    	}
    }
    console.log(a);
    a.send();	

}
*/
//^^this isn't working becuase we are not making sure that that readyState is available so we need to build out another function
//to listen for the readyState change
//onreadystatechange function


//this works

function loadQuestions() {
    var a = new XMLHttpRequest();
    a.open("GET", "https://api.myjson.com/bins/14v6f", true);
    a.onreadystatechange = function () {
        if (a.readyState == 4) {
            myObj = JSON.parse(a.responseText);
            //page = 1
            buildQuiz(1);
        }
    }
    a.send();
}

//build out quiz
//need to loop through all the objects within the myObj object
//looping through the questions


// function buildQuiz() {
// 	for (var i in myObj) {
//     console.log(myObj[i].question);
// 	}
// }

//but we want to put the questions on multiple pages - so we need to have different page values - var myObj = "", page=0 -
//and we don't need to loop through yet but just assign each question to a page (add page = 1 to the loadQuestions function)
//now loop through

//correctAnswer = myObj[page - 1].answers[myCorrect]; is the container of the value of the actual answer
//this gives us the ability to make a comparison between the value that is being sent on the inner html
//from the clicked value to see what is being contained in the correctAnswer

function buildQuiz(pg) {

	page = pg;
	if (page > 0) { 
	var myQuestion = myObj[page - 1].question;
	var myCorrect = myObj[page - 1].correct;

	correctAnswer = myObj[page - 1].answers[myCorrect];


	var questionHolder = '';
    var yesCorrect = '';


    for (var i in myObj[page - 1].answers) {
    	
    	if (i == myCorrect) {
    		yesCorrect = '*';
    	 } else {
    	 	yesCorrect= '';
    	 }

    	//questionHolder += '<div class="col-sm-6"><div class="btnAns">' + myObj[page - 1].answers[i] + ' ' + yesCorrect + '</div></div>';
 	    questionHolder += '<div class="col-sm-6"><div class="btnAns">' + myObj[page - 1].answers[i] + '</div></div>';
 	  
	}
    output.innerHTML = '<div class="myQ">' + myQuestion +  ' </div>';
    output.innerHTML += questionHolder;

    for (var x = 0; x < bAnswer.length; x++) {
    	bAnswer[x].addEventListener("click", myAnswer, false);
    }



    console.log(bAnswer); //this is showing us the possible answers to the quiz question
   }
};
//now we need to add event listeners and find out what the user has clicked on, and progression through the quiz

//event handlers for the next and previous buttons
btnPre.onclick = function() {
	buildQuiz(page - 1)
	};
btnNxt.onclick = function() {
	buildQuiz(page + 1)
	};

//console.log(this); has all the information triggered off a click
//for this myAnswer function to work we need to modify this code: questionHolder += '<div class="col-sm-6"><div class="btnAns">' + myObj[page - 1].answers[i] + ' ' + yesCorrect + '</div></div>';
//see the modification up above

function myAnswer() {
	var myResult = "";
	if (this.innerText == correctAnswer) {
		myResult = "correct";
	} else {
		myResult = "incorrect";
	}
	console.log(myResult); 
	console.log(correctAnswer);
};

//how to make all of the buttons clickable and get the values from the buttons (look at the top)
















