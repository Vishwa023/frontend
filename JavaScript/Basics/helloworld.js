// var  firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
var age = prompt("Enter Yout Age");

// var fullName = firstName + " " + lastName;

// alert(fullName);
// alert(age);

// console.log("Your full name is " + fullName);
// console.log("Your age is " + age);

if(age<0)
{
    alert("error");
}
else if(age===21)
{
    alert("Happy 21st Birthday");
    console.log("Happy Birthday");
}

if(age%2)
{
    alert("Your age is ODD");
    console.log("Your age is ODD");
}
else
{
    alert("Your age is EVEN");
    console.log("Your age is EVEN");
}

if(Math.sqrt(age)*Math.sqrt(age)==age)
{
    alert("Perfect Square");
    console.log("Age is Perfect Square");
}