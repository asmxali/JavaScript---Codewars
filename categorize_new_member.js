// PSEUDOCODE

// 1. Take data from array and change the output using .map() method
// 2. In the .map() method filter each array element using an if statement
// 3. Depending on the element return the string 'Senior' or 'Open'

// MY SOLUTION
function openOrSenior(data) {
  // ...
  // create an empty variable to store results
  let memberStatus = [];

  //loop through the data to get each individual array
  for (let memberData of data) {
    let age = memberData[0];
    let handicap = memberData[1];

    //check seniority
    if (age >= 55 && handicap > 7) {
      memberStatus.push("Senior");
    } else {
      memberStatus.push("Open");
    }
  }
  return memberStatus;
}

// BETTER SOLUTION

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}
