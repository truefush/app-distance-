alert("This application determines the distance you travel from a point (a) to a point (b) from the time generated by the average that it takes you to travel this distance at an average speed of 5k/h.");
alert("The more times you travel this path from point (a) to point (b), the more accurate the distance traveled will be.");

//array object
const numPersons = [];

//input people object
const people1 = new people("santiago", 20, "male", 180);
console.log(people1);

//add array of objects
numPersons.push (people1);
console.log(numPersons)

//array
const transport = ["car", "walk", "cycle", "motorcycle"];
console.log("number of transport are: " + transport.length);
//----------------------------------------------------------------------------


//input
var numComings = parseInt(prompt("add number of times you want to move to point (b)"));
var sumComings = 0;

for(let i = 0; i < numComings; i++){
    var speed = parseFloat(prompt("add how long did it take to arrivea"));
    sumComings = sumComings + speed;
}

average(sumComings , numComings);

//print
console.log("the distance you travel is " + distance + " meters");
alert(distance + " meters");
document.write("the distance you travel is " + distance + " meters");
//---------------------------------------------------------------------------


//method
function average(sumComings , numComings){
    distance = 83.33 * (sumComings/numComings);
}

//method object
function people(firstName, age, gender, height){
    this.firstName = firstName;
    this.age = age;
    this.gender = gender;
    this.height = height;
} 