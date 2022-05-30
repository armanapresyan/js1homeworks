//1.Get array of node ids from tree (keys).

let tree = {
  0: {
    1: {
      3: {},
      4: {
        6: {},
      },
    },
    2: {
      5: {},
    },
  },
};

function nodeIdsFromTree(tree, result = []) {
  for (let key in tree) {
    let numberKey = Number(key);
    result.push(numberKey);
    result.sort((el1, el2) => el1 - el2);
    nodeIdsFromTree(tree[key], result);
  }

  return result;
}

//2. Get array of nodes from tree.

let tree = {
  0: {
    1: {
      3: {},
      4: {
        6: {},
      },
    },
    2: {
      5: {},
    },
  },
};

function nodesFromTree(obj, result = []) {
  for (let key in obj) {
    result.push({ id: key, children: Object.keys(obj[key]) });
    nodesFromTree(obj[key], result);
  }
  return result;
}

//3.Implement binary search.

function binarySearch(
  arr,
  searchELem,
  firstIndex = 0,
  lastIndex = arr.length - 1
) {
  let sortingArr = arr.sort((el1, el2) => el1 - el2);
  if (lastIndex >= firstIndex) {
    let mid = Math.round((lastIndex - firstIndex) / 2) + firstIndex;

    if (sortingArr[mid] === searchELem) {
      return mid;
    } else if (sortingArr[mid] > searchELem) {
      return binarySearch(sortingArr, searchELem, firstIndex, mid - 1);
    } else {
      return binarySearch(sortingArr, searchELem, mid + 1, lastIndex);
    }
  }

  return -1;
}
