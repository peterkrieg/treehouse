// // Easy practice program where computer guesses a number

// // generates number between 1 and 1000


// for (var i = 0; i<10; i++){
// 	var num, compGuess, numGuesses;
// 	numGuesses = 0;
// 	var num = Math.floor(Math.random()*1000 + 1);
// 	console.log('the random number is ' + num);
// 	do{
// 		compGuess = Math.floor(Math.random()*1000 + 1);
// 		numGuesses++;
// 	} while (compGuess !== num)
// 	console.log('took the computer to guess ' + numGuesses + ' tries');
// }

var body = document.getElementsByTagName('body')[0];

function drawCircle(numCircles){
	for(var i=0; i<numCircles; i++){
		var colors = [];
		for (var j=0; j<3; j++){
			colors[j]= Math.floor(Math.random()*256);
		}
		var div = document.createElement('div');
		div.style.background = 'rgb(' + colors[0]+', '+colors[1]+', '+colors[2]+')';
		body.appendChild(div);
		var p = document.createElement('p');
		p.textContent = i;
		div.appendChild(p);
		if(colors[0]+colors[1]+colors[2]<400){
			p.style.color = 'white';
		}
	}
}

drawCircle(400);

var nums = [2, 3, 2, 5, 6, 2, 8, 2, 4, 5];
console.log(nums.indexOf(6));
