
var fs = require("fs");
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

//var cardType = process.argv[2];

inquirer.prompt([

	{
    type: "input",
    name: "cardType",
    message: "Which card type do you want to create?",
    //choices: ['Basic', 'Cloze']
  }

  ]).then(function(answer1) {
  	if (answer1.cardType === 'basic') {
  		console.log("yes, BASIC");
  		console.log(answer1.cardType);
  		createBasic();
  	} else if (answer1.cardType === "cloze") {
  		console.log("CLOZE");
  		createCloze();
  	} else {
  		console.log("error");
  		console.log(answer1.cardType);
  		//console.log(cardType);
  	}

  })

function createBasic (){
	inquirer.prompt([
		{
			type: "input",
			name: "cardSide",
			message: "Select front or back"
		}
	]).then(function(answer) {
		if (answer.cardSide === "front") {
			inquirer.prompt([
			{	
				type: "input",
				name: "front",
				message: "What is the question?"
			}
			]).then (function(answer) {
				console.log("front");
				console.log(answer);
			})
		} else if (answer.cardSide === "back") {
			inquirer.prompt([
			{
				type: "input",
				name: "back",
				message: "What is the answer?"
			}
			]).then (function(answer) {
				console.log("back");
			})
		}
})
}

