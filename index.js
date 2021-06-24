const firstProblem = (arr, n) => {
  const array = [];
  const factorialNumbers = [];

  if (arr.length > 0 && n) {
    arr.map((element) => {
      if (element % n === 0) {
        array.push(element);
      } else {
        console.log(`${element} is not dividable by ${n}`);
      }
    });
  } else {
    if (arr.length === 0 || n === undefined) {
      if (arr.length === 0 && n) {
        return "Please assign a value of arr parameter.";
      } else if (arr.length > 0 && n === undefined) {
        return "Please assign a value of 'n' parameter";
      }
    }
  }

  const fact = (n) => (n ? n * fact(n - 1) : 1);
  const result = array.map(fact);

  const factsArray = factorialNumbers.concat(result);
  console.log("Factorials array: ", factsArray);
  return Math.max(...factsArray);
};

const LargestNumber = firstProblem([5, 4, 6, 2, 100], 2);
console.log(LargestNumber);
