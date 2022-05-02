/* 1. Given an array. Write a recursive function that removes the first element and returns the given
array. (without using arr.unshift(),assign second element to first, third element to second...)
 */

function unShift(array, step = 0) {
  if (step < array.length) {
    array[step] = array[step + 1];

    return unShift(array, step + 1);
  }

  array.pop();
  return array;
}

/* 2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
    that concats arrays). */

function concatArr(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      concatArr(arr[i], result);
    }
  }

  return result;
}

/* 
3. Given an array and a number N.  Write a recursive function that rotates an array N places to the
left. (Hint: to add element to the beginning use arr.unshift()) */

function rotates(array, n, step = 0) {
  if (n <= step) {
    return array;
  }
  let delLastEl = array.pop();
  array.unshift(delLastEl);

  return rotates(array, n, step + 1);
}

console.log(rotates([1, 2, 3, 4, 5, 6, 7, 8], 2));
/* 
4. Given the list of the following readers:
[
    { book: "Catcher in the Rye&quot", readStatus: true, percent: 40},
    { book: "Animal Farm&quot", readStatus: true, percent: 20},
    { book: "Solaris&quot", readStatus: false, percent: 90 },
    { book: "The Fall&quot", readStatus: true, percent: 50 },
    { book: "White Nights&quot", readStatus: false, percent: 60 } ,
    { book: "After Dark&quot", readStatus: true, percent: 70 }
    ];
Output the books sorted by the percent in descending order which readStatus is true. */

let readBook = [
  { book: "Catcher in the Rye&quot", readStatus: true, percent: 40 },
  { book: "Animal Farm&quot", readStatus: true, percent: 20 },
  { book: "Solaris&quot", readStatus: false, percent: 90 },
  { book: "The Fall&quot", readStatus: true, percent: 50 },
  { book: "White Nights&quot", readStatus: false, percent: 60 },
  { book: "After Dark&quot", readStatus: true, percent: 70 },
];

let sortReading = readBook
  .filter(function (el) {
    if (el.readStatus === true) {
      return true;
    }
  })
  .sort(function (el1, el2) {
    if (el1.percent > el2.percent) {
      return 1;
    } else {
      return -1;
    }
  });

// 5. Implement “map” method for plain objects (same as Array map method.)

function customMapObj(fn) {
  if (typeof fn !== "function") {
    console.log(`${fn} is not function`);
    return;
  }

  let result = {};

  for (let key in this) {
    result[key] = fn(this[key], key, this);
  }
  return result;
}
