// MY SOLUTION

function isValidWalk(walk) {
  //insert brilliant code here
  //create a variable to keep track of x displacement
  let xDirection = 0;
  //create a variable to keep track of y displacement
  let yDirection = 0;
  //cancel out when more than 10 blocks are walked
  if (walk.length !== 10) {
    return false;
  }
  // loop through the walk array
  for (let direction of walk) {
    if (direction === "n") {
      yDirection++;
    } else if (direction === "s") {
      yDirection--;
    } else if (direction === "e") {
      xDirection++;
    } else if (direction === "w") {
      xDirection--;
    }
  }

  //check if x & y displacement is 0
  if (xDirection === 0 && yDirection === 0) {
    return true;
  } else {
    return false;
  }
}

// BETTER SOLUTION

function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dy--;
        break;
      case "s":
        dy++;
        break;
      case "w":
        dx--;
        break;
      case "e":
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}
