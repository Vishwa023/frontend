var numSquares = 6;
var colors = randomcolors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyButton = document.querySelector("#easybtn");
var hardButton = document.querySelector("#hardbtn");

easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3;
	colors  = randomcolors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";		
		}
	}
	messageDisplay.textContent = "";
});

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6;
	colors = randomcolors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	messageDisplay.textContent = "";
});

reset.addEventListener("click",function(){
	colors = randomcolors(numSquares);
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	pickedColor = pickColor();
	this.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
});

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){

		// console.log(this.style.backgroundColor + " " + pickedColor);
		if(this.style.backgroundColor === pickedColor)
		{
			messageDisplay.textContent = "correct!";
			h1.style.backgroundColor = pickedColor;
			colorChange();
			reset.textContent = "Play Again?";
		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent = "try Again";
		}
	});
}

function colorChange(){
	squares.forEach(function(color){
		color.style.backgroundColor = pickedColor;
	});
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function randomcolors(num)
{
	var arr = [];
	for(var i=0;i<num;i++)
	{
		arr.push(changeRandomColor());
	}
	return arr;
}

function changeRandomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var rgb  = "rgb("+r+", "+g+", "+b+")";
	return rgb;
}

