var students = [
	{
		name: "Peter",
		age: 21,
		male: true
	},
	{
		name: "Jess",
		age: 22,
		male: false
	},
	{
		name: "Bill",
		age: 18,
		male: true
	},
	{
		name: 'Joe',
		age: 25,
		male: true
	}
];



var message = '';
var output = document.getElementById('output');
output.innerHTML = message;
function printStudents(studentsArray){
	for(var i=0; i<studentsArray.length; i++){
		student = studentsArray[i];
		message += '<h1> Student ' + i + '</h1>';
		message += '<ul> <li> Name: ' + student.name + '</li>';
		message += '<li> Age: ' + student.age + '</li>';
		message += '<li> Male? ' + student.male + '</li></ul>';
		}
	}

// printStudents(students);
output.innerHTML = message;


while(studentName !== 'quit'){
	var studentName = prompt('type student name').toLowerCase();

	function findStudent(studentName){
		message = '';
		for(var i =0; i<students.length; i++){
			if (studentName === students[i].name.toLowerCase()){
				var student = students[i];
				console.log('what');
				break;
			}
		}
		message += '<h1> Student ' + i + '</h1>';
		message += '<ul> <li> Name: ' + student.name + '</li>';
		message += '<li> Age: ' + student.age + '</li>';
		message += '<li> Male? ' + student.male + '</li></ul>';

	}



	findStudent(studentName);
	output.innerHTML = message;
}