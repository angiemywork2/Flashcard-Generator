var fs = require("fs");
var inquirer = require("inquirer");

//var cardType = process.argv[2];


//takes side of card: front or back
function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}

//BasicCard.prototype.test = function(){
BasicCard.prototype.choice = function(){
	console.log("Hi from Basic!");
	inquirer.prompt([
  		{
  		type:"input",
    	name: "firstPresident",
    	message: "Who was the first president?"
  		} 
	]).then(function (user) {
		if (user.firstPresident === "George Washington") {
		console.log("correct");
		//show back of card
		} else {
		console.log("wrong");
		console.log("The correct answer is: " + this.back);
	}
	})

	
}

// function test ('yes', 'no'){
// 	var test = new BasicCard ();
// 	console.log("hi from BasicCard");
// }

function getAnswer () {

	inquirer.prompt([
  		{
    	name: "firstPresident",
    	message: "Who was the first president?"
  		} 
	])

	if (firstPresident === "George Washington") {
		console.log("correct");
		//show back of card
	} else {
		console.log("error");
	}

}

module.exports = BasicCard;