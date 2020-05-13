var input = prompt("What would you like to do");

todos = [];

while(input!=="Quit")
{
	if(input === "New")
	{
		addtodo();
	}
	else if(input === "List")
	{
		listtodo();
	}
	else if(input === "Delete")
	{
		deletetodo();
	}
	input = prompt("What would you like to do");
}

console.log("Ok, You Quit the App");

function addtodo(){
	var newTodo = prompt("Enter your new Todo");
	todos.push(newTodo);
}

function listtodo(){
	alert(todos);
	todos.forEach(function(todo,i){
		console.log(i+":"+todo);
	});
}

function deletetodo(){
	var ind = prompt("Enter the index of an item you want to Delete");
	todos.splice(ind,1);
}