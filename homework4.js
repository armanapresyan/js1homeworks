//1. Create a function that builds a tree like object given an array with object which
//contains parent and id properties.

function buildTree(arr) {
  let sortArr = arr.sort((el1, el2) => {
    if (el1.parent === null) {
      return -1;
    }
    if (el2.parent === null) {
      return 1;
    }
    return el1.parent - el2.parent;
  });

  let tree = {};

  sortArr.forEach((el) => {
    const parentNode = findItemInTree(tree, el.parent);

    parentNode[el.id] = {};
  });

  function findItemInTree(tree, keyName) {
    if (!Object.keys(tree).length) {
      return tree;
    }

    if (tree.hasOwnProperty(keyName)) {
      return tree[keyName];
    }

    for (let key in tree) {
      return findItemInTree(tree[key], keyName);
    }
  }

  return tree;
}
 

//3. Write a recursive function to determine whether all digits of the number are odd or not.

function allDigitsOfNumberAreOdd(number) {
  let lastNamber = 0;

  lastNamber = number % 10;
  number = Math.floor(number / 10);
  if (s % 2 === 0) {
    return false;
  }

  if (number > 0) {
    return allDigitsOfNumberAreOdd(number);
  }

  return true;
} 

//4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if
// such element does not exist, return -1)․

const findSmallestPositive = (arr, currentSmallest = Infinity) => {
  let lastFromArray = arr.pop();
  let smallest;

  if (lastFromArray <= 0) {
    smallest = currentSmallest;
  } else {
    smallest = Math.min(lastFromArray, currentSmallest);
  }

  if (!arr.length) {
    if (smallest === Infinity) {
      return -1;
    } else {
      return smallest;
    }
  }

  return findSmallestPositive(arr, smallest);
};
