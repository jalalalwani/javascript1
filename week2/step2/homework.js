//    (1)
console.log("this is 1 and should be 1");
let x = 1;
console.log(x);

//    (2)
console.log("this is 2");
x = 7.25; 
console.log('X before rounding ' + x); 
x = Math.round(x); 
console.log('X after rounding ' + x);

// (3 and 4)
console.log("this is 3 & 4, should be 3");
let colors = ['red','green','blue']; 
console.log('The length of my array is : ', colors.length ,'My array is : ',colors);

//    (5)
console.log("this is 5  it will print: not the same type");
let y = 26; let z = 'jalal'; 
if (typeof(y) === typeof(z)){
     console.log('same type'); 
} 
else{ 
    console.log('not the same type'); 
}

//    (6)
console.log("this is 6");
let m = 7; 
m = m % 3; 
console.log("it should be 1")
console.log('The result of statement: (m = m % 3) if m = 7 is : ',m);

//    (7)
console.log("this is 7");
let arr = [5, "green", "blue" , 8];

if(6/0 == 10/0){
    console.log('Equal'); 
}
else {
    console.log('Not Equal');
}

