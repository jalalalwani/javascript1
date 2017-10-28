//<  1  >  
//Create a function that takes 3 arguments and returns the sum of the three arguments.

function totaal (a , b , c){

let sum = a + b + c ;
return sum


};

console.log (totaal (32 , 45 , 776));

//----------------------------------------------------------------------------------------------------------------------------------------
                                      //<  2  >
//Create a function named colorCar that receives a color, and prints out, "a red car" for example.
//(Hint: put it in your file and run it like before.)                                     
                                  
function colorCar (color){

console.log("a " + color + " car")


};

console.log( colorCar ('red'));

//----------------------------------------------------------------------------------------------------------------------------------------
                                      //<  3  >
 /*Create an object and a function that takes the object as a parameter and prints 
 out all of its names and values.*/                                     
let mee = {
name : "jalal",
age : 32 ,
hobby : "reading",
}
function fun (obj){
for ( key in obj) { 
console.log( key  + ':' + obj [key]);
}
}
fun(mee);

//----------------------------------------------------------------------------------------------------------------------------------------
                                       //<  4  >
  /*Create a function named vehicleType that receives a color, and a code, 1 for car,
2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)*/                
                                       
function vehicleType ( color , code){
switch (code) {
case 1 :
code = "car";
console.log( "a " + color + " " +code);
break ;
case 2 :
code = "motorbike";
console.log( "a " + color + " " + code);
break ;
}

};
vehicleType ("blue", 2);

/*----------------------------------------------------------------------------------------------------------------------------------------
( ?????????????? )                                                <  5  >
      Can you write the following without the if statement, 
      but with just as a single line with console.log(...);?*/

(3 == 3)? console.log("true") : console.log("false");

//---------------------------------------------------------------------------------------------------------------------------------------
                                      // <  6  > 
    //Create a function called vehicle, like before, 
    //but takes another parameter called age, so that vehicle("blue", 1, 5) prints 
    //"a blue used car"        
function vehicleType ( color , code , usage){
switch (code) {
case 1 :
code = "car";
switch (usage){
case 0 :
usage = "new" ;
console.log( "a " + color + " " + usage + " " +code);
break;
default : console.log( "a " + color + " " + "used " +code);
}
break ;
case 2 :
code = "motorbike";
switch (usage){
case 0 :
usage = "new" ;
console.log( "a " + color + " " + usage + " " +code);
break;
default: console.log( "a " + color + " " + "used " +code);
}
break ;

}

};
vehicleType ("blue", 2 , 1);

/*------------------------------------------------------------------------------------------------------------------------------------
                                <   7   > 
 //Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.*/
let vehicle = [" Motorbike" , " caravan" , " bike"];

/*------------------------------------------------------------------------------------------------------------------------------------
                                <   8   >
           //How do you get the third element from that list?  */                             
console.log(vehicle.[2]) ;

/*------------------------------------------------------------------------------------------------------------------------------------
                                <   9   >
           //Change the function vehicle to use the list of question 4.
           //So that vehicle("green", 3, 1) prints "a green new caravan".*/
function vehicleType ( color , code , usage){
switch (code) {
case 0 :
code = "motorbike";
switch (usage){
case 0 :
case 1 :
case 2 :
case 3 :
usage = "new" ;
console.log( "a " + color + " " + usage + " " +code);
break;
default : console.log( "a " + color + " " + "used " +code);
}
break ;
case 1 :
code = "caravan";
switch (usage){
case 0 :
case 1 :
case 2 :
case 3 :
usage = "new" ;
console.log( "a " + color + " " + usage + " " +code);
break;
default: console.log( "a " + color + " " + "used " +code);
}
break ;
case  2 :
code = "bike";
switch (usage){
case 0 :
case 1 :
case 2 :
case 3 :
usage = "new" ;
console.log( "a " + color + " " + usage + " " +code);
break;
default: console.log( "a " + color + " " + "used " +code);

};
break;
}
}
vehicleType ("blue", 2 , 1) ;
/*---------------------------------------------------------------------------------------------------------------------------------------
                                <   10  >
  //Use the list of vehicles to write an advertisement. So that it prints something like:
  // "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". 
  //(Hint: use a for loop.) */
   
let vehiclesList = ["carvan ", "bike ", "motorbike ", "car ", "airplane"]
let vehicle = "";

for (let c of vehiclesList){
vehicle += ", " + vehiclesList[c];
}

console.log("Amazing Joe's Garage, we service " + vehicle);

/*----------------------------------------------------------------------------------------------------------------------------------------
                                <   11  >
What if you add one more vehicle to the list, can you have that added to the advertisement 
without changing the code for question 7?*/

let vehiclesList = ["carvan ", "bike ", "motorbike ", "car ", "airplane"];
vehiclesList.push("scooter") ;
console.log(vehiclesList);

//----------------------------------------------------------------------------------------------------------------------------------------
                                //<   12   >
                       // Create an empty object           
let newObject = {} ;
/*----------------------------------------------------------------------------------------------------------------------------------------
                                <   13   >
                                
----------------------------------------------------------------------------------------------------------------------------------------
                                <   14   >
----------------------------------------------------------------------------------------------------------------------------------------
                                <   15   >
----------------------------------------------------------------------------------------------------------------------------------------
                                <   16   >
----------------------------------------------------------------------------------------------------------------------------------------
                                <   17   >
----------------------------------------------------------------------------------------------------------------------------------------*/

