function fibs(number) {
  let first = 0;
  let second = 1;
  let fibArray = [first, second];

  for (let i = 2; i < number; i++) {
    let total = fibArray[i - 2] + fibArray[i - 1];
    fibArray.push(total);
  }
  return fibArray;
}

function fibsRec(number) {
  return number <= 0
    ? "Enter valid number"
    : number === 1
    ? [0]
    : number === 2
    ? [0, 1]
    : [
        ...fibsRec(number - 1),
        fibsRec(number - 1)[number - 2] + fibsRec(number - 2)[number - 3],
      ];
}

console.log(fibs(8));
console.log(fibsRec(8));

function mergeSort(array) {
  let arrayLength = array.length;

  // base case
  if (arrayLength === 1) {
    return array;
  }

  // split array
  let half = Math.round(arrayLength / 2);
  let leftHalf = array.slice(0, half);
  let rightHalf = array.slice(half, arrayLength); // remaining array

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(leftHalfArray, rightHalfArray) {
  // merge algorithm
  console.log("left: " + leftHalfArray + " | " + "right: " + rightHalfArray);

  let mergeArray = [];

  let indexLeft = 0;
  let indexRight = 0;

  while (
    indexLeft < leftHalfArray.length &&
    indexRight < rightHalfArray.length
  ) {
    if (leftHalfArray[indexLeft] < rightHalfArray[indexRight]) {
      mergeArray.push(leftHalfArray[indexLeft]);
      indexLeft += 1;
    } else {
      mergeArray.push(rightHalfArray[indexRight]);
      indexRight += 1;
    }
  }

  // pushes remaining elements by comparing with index
  while (indexLeft < leftHalfArray.length) {
    mergeArray.push(leftHalfArray[indexLeft]);
    indexLeft += 1;
  }

  while (indexRight < rightHalfArray.length) {
    mergeArray.push(rightHalfArray[indexRight]);
    indexRight += 1;
  }

  return mergeArray;
}

console.log(mergeSort([3, 2, 1, 4]));
console.log(mergeSort([7, 5, 4, 2, 8, 1, 6, 3]));
console.log(mergeSort([7, 5, 4, 2, 8, 1, 6]));

// drafts :D

// // sort within array
// if (arrayLength === 2) {
//   return array[0] === array[1]
//     ? [array[0], array[1]]
//     : array[0] > array[1]
//     ? [array[1], array[0]]
//     : [array[0], array[1]];
// }

// for (let i = 0; i < leftHalfArray.length; i++) {
//   for (let j = 0; j < rightHalfArray.length; j++) {
//     if (rightHalfArray.length === 0) {
//       mergeArray = mergeArray.concat(leftHalfArray);
//       break;
//     }
//     if (leftHalfArray[i] < rightHalfArray[j]) {
//       mergeArray.push(leftHalfArray[i]);
//       leftHalfArray.splice(leftHalfArray[i], 1);
//       break;
//     } else {
//       mergeArray.push(rightHalfArray[j]);
//       rightHalfArray.splice(rightHalfArray[j], 1);
//       break;
//     }
//   }
//   mergeArray = mergeArray.concat(rightHalfArray);
// }
