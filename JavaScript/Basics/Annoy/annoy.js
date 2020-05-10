var answer = prompt("Are we there yet?");

// .indexOf return starting index of yes else return -1

while(answer.indexOf("yes") === -1)
{
	answer = prompt("Are we there yet?");
}


	alert("Yay we made it");
