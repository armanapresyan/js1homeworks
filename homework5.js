1; // Create a function that builds a tree.
const treeNodes = [
  { id: "root", children: [1, 2] },
  { id: 1, children: [3] },
  { id: 2, children: [4, 5] },
  { id: 3, children: [6] },
  { id: 4, children: [7] },
  { id: 5, children: [] },
  { id: 6, children: [] },
  { id: 7, children: [8, 9] },
  { id: 8, children: [] },
  { id: 9, children: [10] },
  { id: 10, children: [] },
];

function buildTree(arr) {
  let sortArr = arr.sort((el1, el2) => {
    if (el1.id === "root") {
      return -1;
    }
    if (el2.id === "root") {
      return 1;
    }
    return el1.id - el2.id;
  });

  let tree = {};

  sortArr.forEach((el) => {
    const parentNode = findItemInTree(tree, el.id);

    parentNode[el.children] = {};
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

console.log(buildTree(treeNodes));

/* 2. Write a JavaScript function to get all possible subsets of given length of the given
array.
Assume that all elements in the array are unique. */

function subset(arr, n) {
  let result = [];
  function rec(num = 0, arrElem = []) {
    if (arrElem.length === n) {
      result.push(arrElem);
      return;
    }
    for (let i = num; i < arr.length; i++) {
      let copyArr = Object.assign([], arrElem);
      copyArr.push(arr[i]);
      rec(i + 1, copyArr);
    }
  }
  rec();
  return result;
}

console.log(subset(arr, 3));

//3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds.

function decoratorDelay(fn, ms) {
  function delay(...args) {
    return setTimeout(fn, ms, ...args);
  }

  return delay;
}


//4. Implement Debounce decorator


