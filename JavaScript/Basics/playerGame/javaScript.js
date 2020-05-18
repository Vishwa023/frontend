var playerOneCount = 0;
var playerTwoCount = 0;

var buttonOne = document.querySelector("button");
var buttonTwo = document.querySelectorAll("button")[1];
var submitButton = document.querySelectorAll("button")[2];

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var numInput = document.querySelector("#num");
var scoreDisplay = document.querySelector("p span");

var winnigScore = 5;
var gameOver=false;

buttonOne.addEventListener("click",function(){

	// alert("playerOne Button clicked");
	if(!gameOver)
	{
		playerOneCount++;
		// console.log(playerOneCount,winnigScore);
		if(playerOneCount === winnigScore){
			p1Display.classList.add("winnerColor");
			gameOver=true;
		}
		p1Display.textContent = playerOneCount;
	}

});

buttonTwo.addEventListener("click",function(){

	// alert("playerTwo Button clicked");
	if(!gameOver)
	{
		playerTwoCount++;
		if(playerTwoCount === winnigScore){
			p2Display.classList.add("winnerColor");
			gameOver=true;
		}
		p2Display.textContent = playerTwoCount;
	}
});

submitButton.addEventListener("click",function(){

	// alert("submit Button clicked");
	submit();
});

function submit(){
	playerOneCount = 0;
	playerTwoCount = 0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winnerColor");
	p2Display.classList.remove("winnerColor");
	gameOver=false;
};

numInput.addEventListener("change",function(){
	scoreDisplay.textContent = this.value;
	winnigScore = Number(this.value);
	submit();
});