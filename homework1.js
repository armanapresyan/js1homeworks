//1.Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

function invertProperties(obj) {
  let result = {};
  for (let key in obj) {
    let val = obj[key];
    if (!result.hasOwnProperty(val)) {
      result[val] = key;
    } else {
      result[val] = [key].concat(result[val]);
    }
  }

  return result;
}

//2.Given two objects. Write a function that performs shallow compare.

function shallowCompare(obj1, obj2) {
  for (let key1 in obj1) {
    for (let key2 in obj2) {
      if (obj1[key1] !== obj2[key2] || key1 !== key2) {
        return false;
      }
    }
  }
  return true;
}

//3.Given an array. Determine whether it consists only from uniques or not.

function unicalArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

//4.Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern word&quot;) is a word or phrase without a repeating letter.

function isIsogram(string) {
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === " ") {
      continue;
    }

    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }

  return true;
}

//5.Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function maxMinElementsSequence(arr) {
  let count = 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }

    if (min > arr[i]) {
      min = arr[i];
    }
  }

  for (let i = min + 1; i < max; i++) {
    if (arr.indexOf(i) === -1) {
      count++;
    }
  }

  return count;
}
