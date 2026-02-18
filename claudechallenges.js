function fizzbuzz(n) {
	for (let i = 0; i < n; i++) {
		if(i % 3 === 0) {
			console.log("fizz")
		} else if (i % 5 === 0) {
			console.log("buzz")
         } else {
			console.log(i)
		};
	};
};

function fizzBuzzLite(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzBuzzLite(10));
// → [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]

/*function reverseString(inputString) {
  let arrayOne = inputString.split("");
  let arrayTwo = arrayOne.reverse();
  let result = arrayTwo.join("");
  return result;
};*/

function refactoredReverseString(inputString) {
  return inputString.split("").reverse().join("");
};

function countVowels(str) {
  let lowercaseStr = str.toLowerCase();
  let arr = lowercaseStr.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  arr.forEach(element => {
    if (vowels.includes(element)) {
      count++;
    }
  });
  return count;
}