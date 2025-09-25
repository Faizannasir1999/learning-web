// First Task
// Sum of first 10 numbers.....

let number = 0;
for(let x = 1; x<=10; x++){
    number = number + x;
}
console.log(number);

// 2nd task
// table of a number

let num = 5;
for( let i = 1 ; i<=10; i++){
    console.log( num+"x" +i  + "=" +(num*i));
}

// Fizz-Buzz Challenge

for (let i = 1; i<=100; i++){
    if(i%3===0 && i%5===0)
        console.log("Fizz-Buzz",i);

else if(i%3===0){
    console.log("Fizz",i);
}
else if(i%5===0){
    console.log("Buzz",i);
}
else{
    console.log(i);

}
}


