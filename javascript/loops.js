for(i=0; i<10; i++ ) {
    // console.log(i);
}
//wap to print all even numbers between 1 to 10
for(i=1; i<=10; i++){
    if(i % 2 === 0){
        // console.log(i);
    }
}
//wap to print all odd numbers between 1 to 10
for(i=1; i<=10; i++){
    if(i % 2 !== 0){
        // console.log(i);
    }
}
//while loop
i=0;
while(i<20){
    // console.log(i);
    i++;
}
//do while loop
i=20;
do{
    // console.log(i);
    i++;
}
while(i<30);
//wap t print all the number from 1 to 10 using while loop.
console.log("for loop");
i=1;
while(i<10){
    console.log(i);
    i++;
}
//wap t print all the number from 1 to 10 using do while loop.
console.log("do while loop");

i=1;
do{
    console.log(i);
    i++;
}
while(i<10);
//wap to print all the odd numbers between 1 to 20 using for loop.
console.log("for loop");
for(i=1; i<=20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}


//wap to print all the odd numbers between 1 to 20 using while loop.
console.log("while loop");
i=1;
while(i<=20){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++;
}
//wap to print all the odd numbers between 1 to 20 using do while loop.
console.log("do while loop");
i=1;
do{
    if(i % 2 !== 0){
        console.log(i);
    }
    i++;
}
while(i<=20);
//wap to print all the numbers divisible by 7 and 11 in the range of 100 to 200 using for loop.
console.log("for loop");
for(i=100; i<=300; i++){
    if(i % 7 === 0 && i % 11 === 0){
        console.log(i);
    }
}
//wap to print all the prime number in the range of 1 to 100.
console.log("for loop");
for(i=1; i<=50; i++){
    count = 0;
    for(j=1; j<=i; j++){
        if(i % j === 0){
            count++;
        }
    }
    if(count === 2){
        console.log(i);
    }
}
//wap to print all perfect square numbers in the range of 1 to 100.
console.log("for loop");
for(i=1; i<=100; i++){
    let root = i ** 0.5;
    if(Number.isInteger(root)){
        console.log(i);
    }
}

