/**var a; //Declare variable named a.
a = 10;//Assign integer to a variable a 
b = 11; // Create variable b and assign a value to it
var c = 12; //Declare variable c and assign a value to it. No  previous declaration

console.log(a); //Print the content of variable a 
console.log(b); //Print the content of variable b
console.log(c); //Print the content of variable c

a = 13; //Reassign a new value of type number to a.
console.log(a); //Prints out 13.
a = "Another value which is a string"; //Reassign a new value of type string to a.
console.log(a); //Prints out Another value which is a string.
a = true; //Reassign a new value of type boolean - i.e. true or false.
console.log(a); //Prints out true

var d;
console.log(d); // This will print out the value undefined.
a = null;
console.log(a); //This will print out the value null.

a = 10; //Assign variable a the value of 10
b = 20; //Assign variable b the value of 20
c = a +b; //Add the value in a and b and put the result in variable c
console.log(c);//This should print out 30
console.log(b-a); //Subtract value a from b, displays 10 inconsole
console.log(b/a); //Divide b by a, displays 2 in console
console.log(a*b); // Multiply a value by b value; displays 200 in console
console.log(b%a); //Divide b value by a value and return remainder, display 0 in console
console.log(a**2); //a value raised to power2; displays 100 in conole
a++;
console.log(a);//Display 11 in console
b--; //Increment b value
console.log(b); //Displays 19 in console

firstName = "Sochukwuma"
lastName = "Nwokoye"
fullName = firstName + " " + lastName;
console.log(fullName); //This should output the full name Sochukwuma Nwokoye

a = 10;
a < 11;
console.log(a < 11);//Displays True in Console
var test = a > 20;
console.log(test);// Displays false in console
console.log(a >= 10);
console.log(a <= 20);
console.log(a == 10);
console.log(a === "10");

a = 1;
b = 2;
console.log("/n")
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3.
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true.
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true.
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false.
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true. 

var age = 20;
var adult = (age > 20)? "Yes" : "No";
console.log(adult);

var minimumVotingAge = 18;
if (age < minimumVotingAge) {
    console.log("Not eligible to vote");
}
else{
    console.log("Eligible to vote");
}

var dayOfTheWeekCount = 9;
switch (dayOfTheWeekCount){
    case 1: 
        console.log("Dimanche");
        break;
    case 2:
        console.log("Lundi");
        break;
    case 3:
        console.log("Mardi");
        break;
    case 4:
        console.log("Mecredi");
        break;
    case 5: 
        console.log("Jeudi");
        break;
    case 6:
        console.log("Vendredi");
        break;
    case 7:
        console.log("Samedi");
        break;
    default:
        console.log("Desolé, le jour de la semaine numéroté " + dayOfTheWeekCount + " n'existe pas")
}

var ageRange = "below 13";
switch (ageRange){
case "below 1":
console.log("Infant");
break;
case "below 13":
console.log("Pre-teen");
break;
case "below 20":
console.log("Teenager");
break;
default:
console.log("Adult")
}//This switch statement should print out Pre-teen

for (var c = 1; c < 11; c++){
    if (c == 7) continue;
    console.log(c);
}

var n = 0;
while (n!= 5){
    n = Math.floor(Math.random()* 10);
    console.log(n);
}

var x = 0;
do {
    x +=1;
    console.log(x); }while (x<10) */

/**var readlineSync = require('readline-sync');
var answer;
do{
    //use question() function to read input and assign value to answer
    answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: ');
    console.log('You asked me to ' + answer);
}while(answer !='exit')

var readline = require('readline'); //load the readline module into the runtime environment
//Next, create the input/output interface as required by readline module.
var readlineAsync = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Next, declare and define a function named recursiveReadLineAsync
function recursiveReadLineAsync() {
    readlineAsync.question('What should I do? [Type "exit" for me to quit]: ', function (answer){
        console.log('You asked me to ' + answer)
        if (answer == 'exit') //Condition for terminating further self call
            return readlineAsync.close(); //quit the function if answer == exit
        recursiveReadLineAsync(); //No exit yet. Call self again to ask another question.
    });

};
//Finally, invoke the defined function to start the recursion
recursiveReadLineAsync(); */


//By direct declaration
console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA defined below. Correct! 
function addTwoNumbersA(number1, number2){
    return number1 + number2; //Add the two numbers passed when function is called
    }
function multiplier(){
     var product = 1;
    for (var x=0; x < arguments.length; x++){
        product = product * arguments[x];
    }
    return product;
}
console.log(multiplier(10,30));//Prints 300 to the console
console.log(multiplier(10,30,10));//Prints 3000 to the console