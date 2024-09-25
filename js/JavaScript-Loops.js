
// 1.Use a for loop to find the factorial of a number.

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}


console.log(factorial(5),"***1.Use a for loop to find the factorial of a number."); 


// 2.Use a for loop to print the Fibonacci sequence up to a given number

function fibonacci(n) {
    let a = 0, b = 1, nextTerm;
    console.log(a); 
     console.log(b);
    
    for (let i = 2; i < n; i++) {
        nextTerm = a + b;
        if (nextTerm > 10) {
            break;
        }
        console.log(nextTerm);
        a = b;
        b = nextTerm;
        if(nextTerm==10){
            break;
        }
    }
    
}

fibonacci(10); 
console.log("2.Use a for loop to print the Fibonacci sequence up to a given number");

// 3.Use a for loop to print the prime numbers up to a given number. 

function printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

printPrimes(20); 
console.log("3.Use a for loop to print the prime numbers up to a given number.");



// 4.Use a for loop to print the elements of a 2D array .

function print2DArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

print2DArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log("4.Use a for loop to print the elements of a 2D array . ");


// 5.Use a for loop to print the elements of an array in reverse order. Without using built in function

function reverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

reverseArray([1, 2, 3, 4, 5]); 




