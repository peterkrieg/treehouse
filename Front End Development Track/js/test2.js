// console.log("SDSD");


// function saySomething (name){
// 	console.log('hello there, ', name);
// }

// saySomething("Jim");


var input = document.getElementById('text_field');
var button = document.getElementById('action');

button.onclick =  function () {
	console.log('click');
	}








	// var peter = {
	// 	"name": "peter",
	// 	"age" : 21,
	// 	greet: function(){
	// 		console.log("hello my name is peter!!");
	// 	}
	// };


	// peter.greet();


// var peter = {
// 		"name": "peter",
// 		"age" : 21,
// 		greet: function(person){
// 			console.log("hello my name is " + person.name + "!!");
// 		}
// 	};

// peter.greet(peter);


// var tim = {
// 	"name": "Timmm",
// 	"age": 34,
// 	greet: peter.greet
// };








// var peter = {
// 	"name": "peter",
// 	"age" : 21,
// 	greet: function(){
// 		console.log("hello my name is " + this.name + "!!!!!");
// 	}
// };

// peter.greet();


// var nick = {
// 	"name": "Nick",
// 	"age": 25,
// 	greet: peter.greet
// };





// var blah = {};
// blah.name = "BLAHBLAH";










// nick.greet();


// window.name = "WINDOWWW";

// var peterGreet = peter.greet;
// peterGreet();




// peterGreet.call(blah);





// var peter = {
// 	"name": "peter",
// 	"age" : 21,
// 	greet: function(name, mood){
// 		name = name || "Peter";
// 		mood = mood || "awesome";
// 		console.log("hello my name is " + name + " and your mood is " + mood + "!!!");
// 	}
// };


 


// var tim = {
// 	"name": "Timmm",
// 	"age": 34,
// 	greet: peter.greet
// };

// var jack = {
// 	"name": "JACK",
// 	greet: function (name, mood){
// 		name = name || "JACK";
// 		mood = mood || "DELIGHTED";
// 		console.log("hello my name is " + name + " and my mood is " + mood + "!!!")
// 	}
// }


// var peterGreet = peter.greet;

// peter.greet("matt", "great");

// peterGreet.call({name: "jack" }, undefined, "bad");


// var random = {
// 	"name": "random thing",
// 	action: function() {
// 		console.log(this.name);
// 	}
// };

// random.action();



// prototypes section 



var personPrototype = {
  name: 'Anonymous',
  greet: function (name, mood){
    name = name || 'You';
    mood = mood || 'good';

    console.log('Hello, ' + name + " I am " + this.name + " and I am in a " + mood + " mood!");
    return "blah";
  },

  species: "homo sapien"
};




function Person (name) {
	this.name = name;
	return this; 
}

Person.prototype = personPrototype;

peter = new Person("Peter")


jack = new Person("Jack")

console.log(jack.name);
console.log(jack.greet("phillip", "splendous"));

// console.log(peter.name);
// console.log(peter.greet());

Person.prototype.favoriteColor = "green";

console.log(jack.favoriteColor);



// ------------------------------------------


// var lowNum = parseInt(prompt('what number you want to start at?'));
// var highNum = parseInt(prompt('what number you want to end at?'));

// alert('the number will be rolled betweeen ' + lowNum + ' and ' + highNum );

// alert(Math.floor(Math.random()*(highNum-lowNum) + lowNum));




































