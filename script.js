// console.log("Hello world");
// var let const  
// var a=10;
// console.log(a);
// {
// let b=23;     
// console.log(b);
// }
// let b=24;
// console.log(b);

/*let a=10;
let b=20;
console.log(a+b);
console.log(b-a);
console.log(a*b);
console.log(a/b);
console.log(b%a);
*/


/*let a=10;
let b="10";
if(a===b){   double equal check value wheras triple equal to checks the data type also
    console.log(true)
}
else{
    console.log(false)
}
*/

/*let f="Hridya";
let h="T H";
console.log(f+h);
console.log(`${f}  ${h}`);
*/

/*let car={
    model:"Celerio",
    color:"White",
    price:100000
}
console.log(car);
console.log(car.color);
console.log(car.model);
console.log(`${car.model}  ${car.color}`);
*/


/*let person={
    name:"Hridya",
    college:"Christ College",
    Class:"CSE",
    address:{
        housename:"Sooraj",
        street:"AB Nagar"
    }
}
console.log(person);
console.log(`${person.name} ${person.address.housename}`);
*/


// Array
/*
let fruits=["apple","mango","orange",10]
fruits[3]="grapes";
fruits.push("Pineapple")  //push used to insert element at last
fruits.unshift("Dragon fruit") //unshift used to insert element at first
fruits.pop()  //pop() deletes the last element
fruits.shift() //shift() used to delete the first element
console.log(fruits)
*/

/* Object created as an element of an array. Each object can be accessed as an element of the array
let todo=[
        {id:1,
        task:"Reading"
        },
        {
            id:2,
            task:"Play"
        },
        {
            id:3,
            task:"Study"
        },
        {
            id:4,
            task:"sleep"
        }
]
console.log(todo);
console.log(todo[1])
console.log(todo[1].task)
*/

/* FUNCTIONS IN JAVASCRIPT
function sumofnum(a,b){
    console.log(a+b);
}

function diffofnum(f,g){
    console.log(f-g);
}
function proofnum(x,y){
    console.log(x*y);
}
sumofnum(10,20);
diffofnum(20,5);
proofnum(12,5);

ARROW FUNCTION is used instead of"Fuction" inorder to reduce space and time. Convinient ot use
add=(p,q)=> 
{console.log(p+q);
}
add(11,11);
*/
/*
function addition(u,v){
    if((u+v)>10){
        console.log("Sum greater than 10 ");
    }
    else{
        console.log("Sum less than 10");
    }
}
addition(10,2);
*/

let numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
/*printarray=(array)=>{
for(let i=0;i<array.length;i++){
    console.log(array[i])
}
}
printarray(numbers)
*/

whileprint=(array)=>{
let i=0;
while (i<array.length){
    console.log(array[i])
    i++;
}
}
whileprint(numbers)

dowhileprint=(numbers)=>{
    let i=0;
    do{
        console.log(numbers[i])
        i++

    }while(i<numbers.length);

}
dowhileprint(numbers)
