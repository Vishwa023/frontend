// store right number 

var rightNum = 5;

// get the number from user

var stringGuess = prompt("Enter Number");

// connvert user's input in number

var guess = Number(stringGuess);

// Do Operation

while(guess !== rightNum)
{
    if(guess > rightNum)
    {
        alert("Number is too High!! Guess Again");
    }
    else
    {
        alert("Number is too low!! Guess Again");
    }    
    stringGuess = prompt("Enter Number");
    guess = Number(stringGuess);
}

alert("Guessed Number is Right");

// if(guess === rightNum)
// {
//     alert("Guessed Number is Right");
// }
// else if(guess > rightNum)
// {
//     alert("Number is too High!! Guess Again");
// }
// else
// {
//     alert("Number is too low!! Guess Again");
// }