alert("This application determines the distance you travel from a point (a) to a point (b) from the time generated by the average that it takes you to travel this distance at an average speed of 5k/h.");
alert("The more times you travel this path from point (a) to point (b), the more accurate the distance traveled will be.");

/*
//array 1 object
const numPersons = [];
*/



/*
//add object for array
numPersons.push (people1);
console.log(numPersons)

//array 2
const transport = ["car", "walk", "cycle", "motorcycle"];
console.log("number of transport are: " + transport.length);
*/
//________________________________________________________________________________________


//input
var numComings = parseInt(prompt("add number of times you want to move to point (b)"));
var sumComings = 0;

for(let i = 0; i < numComings; i++){
    var speed = parseFloat(prompt("add how long did it take to arrivea"));
    sumComings = sumComings + speed;
}
//________________________________________________________________________________________

//object
//solo funciona con datos fijos no variables
//los objetos NO son funciones 
class people{
    
    constructor(firstName, age, gender, height){
        this.firstName = firstName;
        this.age = age;
        this.gender = gender;
        this.height = height;
    };

    //method 
    // solo funciona con datos fijos no variables
    tell(){
        console.log("hello i'm a " + this.gender + " and mi name is "+ this.firstName);
    };

};

//1 instance people object
const people1 = new people("santiago", 20, "male", 180);

people1.tell();

average(sumComings,numComings);

//print
console.log(people1);
console.log("the distance you travel is " + distance + " meters");
alert(distance + " meters");
document.write("The distance you travel is " + distance + " meters and Merry Christmas Coder");

//__________________________________________________________________________________________

//function
//las funciones SI reciben datos variables
function average(sumComings,numComings){
    return distance = 83.33 * (sumComings/numComings);
}

