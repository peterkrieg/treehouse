$(document).ready(function(){



	function addTask(){
		var taskString = $('.addItem input').val();
		if(taskString ===''){
			alert('cannot be blank!');
			return;
		}
		var newTaskElement = $('<div class="taskContainer"><input type="checkbox"><p>'
			+taskString+'</p><button class="edit">Edit</button><button class="delete">Delete</button></div>');
		$('.toDo').append(newTaskElement);
		$('.addItem input').val('');
	}





	function editTask(editButton){
		// Change button content and class
		editButton.html('Save');
		editButton.attr('class', 'save');
		var taskParagraph = editButton.prev();
		taskParagraph.hide();
		var $newInput = $('<input type="text">');

		taskParagraph.before($newInput); 
		$newInput.val(taskParagraph.text());

		// When the save button is clicked, ..
		$('.toDo').on('click', 'button.save', function(){
			var newTaskText = $('.toDo input[type="text"]').val();
			editButton.text('Edit');
			editButton.attr('class', 'edit');
			taskParagraph.text(newTaskText);
			taskParagraph.show();
			$newInput.remove();
		});
	}

	function switchTaskStatus(checkboxClicked){
		if(checkboxClicked.attr('checked')){
			checkboxClicked.removeAttr('checked');
			var checkboxTaskContainer = checkboxClicked.parent();
			checkboxTaskContainer.clone().appendTo($('.toDo'));
			checkboxTaskContainer.remove();

		}
		else{
			checkboxClicked.attr('checked', 'checked');
			var checkboxTaskContainer = checkboxClicked.parent();
			checkboxTaskContainer.clone().appendTo($('.completed'));
			checkboxTaskContainer.remove();

		}
	}




	




	// When add button is pressed, add new task

	$('.addItem').on('click', 'button', function(){
		addTask();
	})
	// When enter is pressed in input, add new task
	$('.addItem').on('keypress', 'input', function(event){
		if(event.which===13){
			addTask();
		}
	});




	// When edit button is clicked, go through and edit/save task
	$('section').on('click', 'button.edit', function(){
		editTask($(this));
	});

	// When checkbox is clicked, either send to toDo or completed section.  
	$('.container').on('click', 'input[type="checkbox"]', function(){
		switchTaskStatus($(this));
	})


	// When delete button is clicked, delete the container task element
	$('section').on('click', 'button.delete', function(event){
		// remove parent element of delete button clicked, which is the task container
		$(this).parent().remove();
	});


































	














});