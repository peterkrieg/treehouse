var capitalQuiz = [
	['What is capital of Belarus?', 'Minsk'],
	['What is capital of Libera', 'Monrovia'],
	['What is capital of Sierra Leone?', 'Freetown'],
	['what is capital of canada?', 'Ottawa']
];

function askQuiz(quiz){
	var numCorrect = 0;
	for(var i = 0; i<capitalQuiz.length; i++){
		var response = prompt(capitalQuiz[i][0].toLowerCase());
		if(response === capitalQuiz[i][1].toLowerCase()){
			numCorrect++;
		}
	}
	console.log('You got a total of ' + numCorrect + 
		' questions right out of ' + quiz.length + 
		' total qustions for a score of ' + (numCorrect/quiz.length)*100 + '%');
}

askQuiz(capitalQuiz);

