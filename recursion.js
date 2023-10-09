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
