function addnums(num1, num2) {
    var c = num1 + num2;
    console.log(c);
}
addnums(10, 20);

const getAvg = function(n1, n2, n3) {
    let avg = (n1 + n2 + n3) / 3;
    // console.log(avg);
    return avg;
}

// getAvg(10, 20, 30);
const result = getAvg(10, 20, 30);
console.log(result);

const factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact =fact * i;
    }
    return fact;
}
const result1 = factorial(5);
console.log(result1);

//wap function to check if a number is Prime or not.
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
const prime = isPrime(11);
console.log(prime);

//wap function to convert celcius to fahrenheit.
const celciusToFahrenheit =(c) =>{
    let f = (c*9/5)+32;
    return f;
}
const temp = celciusToFahrenheit(100);
console.log(temp);