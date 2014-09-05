$( document ).ready(function() {

	// Add Listeners
	$("#addToTodoList").bind("click", addToList);

	/*
		Adds item to todo list
	*/
	function addToList()
	{
		var currentList = $('#todoList');
		var item = getItem();

		listItem = document.createElement("li");
		listItem.innerHTML = item;
		currentList.prepend(listItem);
		
		addRemoveListener(listItem);
	}

	/*
		Gets the item from the todo input and clears input field
		return - the item
	*/
	function getItem() {
		var item = $('#todoItemInput').val();
		$('#todoItemInput').val('');
		return item;
	}

	/*
		Add listener to new todo item
	*/
	function addRemoveListener(item) {

		$(item).bind("click", function(e) {
			$(e.target).remove();
		});

	}
});