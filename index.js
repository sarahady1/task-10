//--------------------------------------------------------------
//-----------------------Problem 1------------------------------
// Create a function that takes two number as input and return true if one
// of them is 15 or their summation is 15
// Example: 1. Input: 5 15 --> Output: true
// 2. Input: 10 5 --> Output: true
// 3. Input: 5 5 --> Output: false
//---------------------------------------------------------------
// function Is15(n1, n2) {
//     var n1 = +prompt('enter first number:');
//     var n2 = +prompt('enter second number:');
//     if (n1 == 15 || n2==15 || n1 + n2 == 15) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }

// }
// Is15()
//------------------------------------------------------------------
// Problem 2:
// Function to check if the given number is a perfect square or not.
// (Search for what is perfect square is.)
//------------------------------------------------------------------
// function isPerfectSq(num) {
//     var num = +prompt('enter anumber');
//     if (num< 0){
//         console.log('false');
//     }
//     if (Number.isInteger(Math.sqrt(num))) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// }
// isPerfectSq()
//------------------------------------------------------------------
//Problem 3:
// You have five variables x1, x2, x3, x4, x5 their values are initially (1, 2, 3,
//     4, 5). One of these variables is replaced with 0. You need to make a
//     function that takes these five variables and checks which of them is
//     replaced.
//     Example: Input: 1, 2, 0, 4, 5 --> Output: 3
//     Input: 0, 2, 3, 4, 5 --> Output: 1
//----------------------------------------------------------------
// var x1 = 1;
// var x2 = 2;
// var x3 = 0;
// var x4 = 4;
// var x5 = 5;
// var test = [x1,x2,x3,x4,x5];
// console.log(test);
// function check() {
//     for (var i = 0; i < test.length; i++) {
//         if (test[i] == 0) {
//             console.log(i+1);
//         }

//     }
// }
// check()
//------------------------------------------------------------------------------------
//Problem 4:
// Given a letter. If the letter is lowercase print this letter after converting it
// to uppercase. And if the letter is uppercase print this letter after
// converting it to lowercase.
// Example: Input: a --> A
// Input: A --> a
//--------------------------------------------------------------------------------------

// var letter = prompt('enter a letter');
// if (letter == letter.toUpperCase()) {
//     console.log(letter.toLowerCase());
// } else {
//     console.log(letter.toUpperCase());
// }
//-------------------------------------------------------------------------------------
//Problem 5:
// Create function that takes two numbers as input to calculate the sum of
// odd numbers greater than the first numbers and less than the second
// number.
// Example: 1. Input: 10 30 --> Output: 200
// 2. Input: 0 10 --> Output: 25
//--------------------------------------------------------------------------------------

// function addOdd(x1, x2) {
//     var x1 = +prompt('enter anumber');
//     var x2 = +prompt('enter anumber');
//     var num = 0;
//     for (var i = x1; i < x2; i++){
//         if (i % 2 == 1) {
//             num += i;
//         }
//     }
//     console.log(num);
// }
// addOdd()
//---------------------------------------------------------------------------------
// Problem 6:
// Function that takes a number n and then takes n numbers from the user
// (using prompt) and if the numbers that the user will enter contains 4 or 7
// then log to the console “It’s your lucky day” otherwise log “It’s not your
// lucky day”.
// Example:
// 1. Input: 5 --> The number that will be passed to the function
// 1 2 3 4 5
// Output: “It’s your lucky day”
// 2. Input: 3
// 1 3 6
// Output: “It’s not your lucky day”
//--------------------------------------------------------------------------------------
// function luck() {
//   var n = +prompt("enter the number of try");
//   var numbers = [];
//   var test = 0;
//   for (var i = 0; i < n; i++) {
//     numbers.push(+prompt("enter a number"));
//   }
//   for (var x = 0; x < numbers.length; x++) {
//     if (numbers[x] == 4 || numbers[x] == 7) {
//       test = 1;
//       break;
//     }
//   }
//   if (test == 0) {
//     console.log("it is't your lucky day");
//   }
//   if (test == 1) {
//     console.log("it is your lucky day");
//   }
// }
// luck();
//-------------------------------------------------------------------------------------
// Problem 7:

// Function that takes number N and then print all the divisors of this
// number. (You can search for what is the divisors is).
// Example: 1. Input: 6 --> Output: 1 2 3 6
// 2. Input: 12 --> Output: 1 2 3 4 6 12
//-------------------------------------------------------------------------------------
// function divisors(N) {
//   var N = +prompt("enter a number");
//   for (i = 1; i <= N; i++){
//     if (Number.isInteger(N / i))
//       console.log(i);
//   }

// }
// divisors()
//--------------------------------------------------------------------------------------
// Problem 8:
// Given number N you have to print all prime number between 1 and n
// (Prime numbers are the number that are inly divisible by 1 and it self)
// Example: 1. Input: 5 --> Output: 2 3 5
// 2. Input: 10 --> Output: 2 3 5 7
//-------------------------------------------------------------------------------------
// function prim(n) {
//   var isprime = true;
//   if (n > 1) {
//     for (var i = 2; i < n; i++) {
//       if (n % i == 0) {
//         isprime = false;
//         break;
//       }

//     }
//   }
//   if (isprime) {
//     console.log(n);
//   }

// }
// function primNum(){
//   var num = +prompt('enter a number');
//   for (i = 2; i <= num; i++){
//     prim(i)
//   }
// }
// primNum()
//---------------------------------------------------------------------------------------
//Problem 9:
// Function that takes a number n and then takes n numbers from the user
// (using prompt) and count the sum of these numbers, how many odd
// numbers, how many even numbers.
//---------------------------------------------------------------------------------------
// function calc(n) {
//   var n = +prompt("enter the number of numbers:");
//   var nums = [];
//   var sum = 0;
//   var odd = 0;
//   var oddNum = [];
//   var even = 0;
//   var evenNum = [];
//   for (var i = 0; i < n; i++) {
//     nums.push(+prompt("enter the number"));
//   }
//   for (var index = 0; index < nums.length; index++) {
//     sum += nums[index];
//     if (nums[index] % 2 == 0) {
//       even++;
//       evenNum.push(nums[index])
//     } else {
//       odd++
//       oddNum.push(nums[index])
//     }
//   }
//   console.log(`sum = ${sum}`);
//   console.log(`odd numbers = ${odd}`);
//   console.log(`odd number is ${oddNum}`);
//   console.log(`even numbers = ${even}`);
//   console.log(`even number is  ${evenNum}`);
// }
// calc();
//-------------------------------------------------------------------------------------
// Problem 10:
// Function takes number n, log to console n lines that describe PUM game.
// Example: Input: 3
// Output:
// 1 2 3 PUM
// 5 6 7 PUM
// 9 10 11 PUM
//------------------------------------------------------------------------------
// function pum(n) {
//   var n = +prompt("enter number of lines:");
//   var x = 1;
//   for (i = 0; i < n; i++) {
//     console.log(`${x} ${x + 1} ${x + 2} PUM`);
//     x += 4;
//   }
// }
// pum()
//---------------------------------------------------------------------------------
//Problem 11:
// Create function that takes two numbers that have to determine if the
// product of these two numbers will be positive or negative or zero.
// Example: 1. Input: -1 3 --> Output: negative
// 2. Input: 2 5 --> Output:
//------------------------------------------------------------------------------------
// function sign(n1, n2) {
//   var n1 = +prompt("enter first number:");
//   var n2 = +prompt("enter second number:");
//   var product = n1 * n2;
//   if (product > 0) {
//     console.log("+ve");
//   } else if (product < 0) {
//     console.log("-ve");
//   } else {
//     console.log("Zero");
//   }
// }
// sign()
//------------------------------------------------------------------------------

//Problem 12:
// Create a function finalGrade(), which calculates the final grade of a
// student depending on two parameters: a grade for the exam and the
// number of completed projects.
// This function should take two arguments: grade for exam (from 0 to 100),
// number of completed projects (from 0 and above).
// This function should return a number (final grade). There are four types
// of final grades:
// • 100, if a grade for the exam is more than 90 or if the number of
// completed projects more than 10.
// • 90, if a grade for the exam is more than 75 and if the number of
// completed projects is minimum 5.
// • 75, if a grade for the exam is more than 50 and if the number of
// completed projects is minimum 2.
// • 0, in other cases
// Example: 1. Input: 100 12 --> Output: 100
// 2. Input: 85 5 --> Output: 90
//----------------------------------------------------------------------------------
// function finalGradeame(grade, projects) {
//   var grade = +prompt('enter the grade of the exam:');
//   var projects = +prompt('enter the number of completed projects:');
//   if (grade > 90 && projects > 10) {
//     console.log('100');
//   } else if (grade > 75 && projects >= 5) {
//     console.log('90');
    
//   } else if (grade > 50 && projects >= 2) {
//     console.log('75');
    
//   } else {
//     console.log('0');
//   }
// }
// finalGradeame()
