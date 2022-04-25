//1.Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.

function isSort (arr){
    let result = -1;
    arr.find(function(el,i,array){
      if(el < array[i - 1]){
        result = i;
        return true;
      }
    })
  
    return result;
  }
  
  console.log(isSort([-9, -4, -4, 3, 12, 4, 5])); 


//2.Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array

function twoDimensionalArray(arr) {
  return arr.map(function (el) {
    let sum = 0;
    for (let j = 0; j < el.length; j++) {
      sum += el[j];
    }

    return sum;
  });
}

console.log(twoDimensionalArray([[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0, -1]]));
 
//3.Given an array of integers. Write a function that return new array from first array, where removed even numbers, and odd numbers was multiplied with new array length

 function oddNumbersMultipliedWithArrLen(arr) {
  let newArr = arr
    .filter(function (el) {
      if (el % 2 === 1 || el < 0) {
        return 1;
      }
    })
    .map(function (el, i, array) {
      return el * array.length;
    });

  return newArr;
}

console.log(oddNumbersMultipliedWithArrLen([5, 4, 78, 0, -3, 7]));
 

//4.Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number.
//Repeat that process if needed and return the result.
 
function sumDigits(number) {
  let sum = 0;

  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

function sum(number) {
  while (number > 9) {
    number = sumDigits(number);
  }

  return number;
}
 

//5. Write a recursive function which receives  a number as arguments and returns the fibonacci sequence as array.

function fibonacci(len) {
  let result = [];
  let num1 = 0;
  let num2 = 1;
  let nextNum;

  for (let i = 0; i < len; i++) {
    result.push(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
  }

  return result;
}

console.log(fibonacci(10));
 
