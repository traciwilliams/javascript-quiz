//making sure file is connected
// window.onload = function() {
// 	console.log("javascript quiz")
// }

/*
var myObj = {firstName:"Traci", 
			lastName:"Williams", 
			age:33}

document.write(myObj.firstName + ' ' + myObj.lastName); //write on the DOM the last name from the myObj object
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


//now to put it on the screen

// var output = document.getElementById("output");
// var myData = '[{"question":"What color is an apple","answers":["Blue","Red","Purple"],"correct":1},{"question":"What Color is Grass","answers":["Green","Red","Purple"],"correct":0}]';
// var myObj = JSON.parse(myData);

//loops through the questions
// for (var i in myObj) {
//     output.innerHTML += myObj[i].question + '? <br>';
// }
// console.log(myObj);




var output = document.getElementById("output");
var myObj = {firstName:"Traci", 
			lastName:"Williams", 
			age:33,
			house:"condo",
			car:"none"

		}



for (var i in myObj) {
	output.innerHTML += myObj.firstName;
}


















