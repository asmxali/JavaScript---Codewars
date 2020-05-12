// MY SOLUTION

function findMissingLetter(array) {
  //create a variable to store the result
  let missingLetter = "";

  // create a variable to store starting point
  let expectedPosition = array[0].charCodeAt(0);

  // increase expectedPosition by 1 until the index of the letters do not match
  // return correct letter based off expected position
  for (let letter of array) {
    let position = letter.charCodeAt(0);
    if (expectedPosition !== position) {
      missingLetter = String.fromCharCode(expectedPosition);
      return missingLetter;
    }
    expectedPosition++;
  }
}

// BETTER SOLUTION
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0);
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
  throw new Error("Invalid input");
}
