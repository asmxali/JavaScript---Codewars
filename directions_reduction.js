//    MY SOLUTION

function dirReduc(arr) {
  //loop through array
  for (let index = 0; index < arr.length; index++) {
    // check if the current value and it's next value are opposites
    // if they are opposites, get rid of both directions
    // and start array from 2 indexes back
    if (arr[index] === "NORTH" && arr[index + 1] === "SOUTH") {
      arr.splice(index, 2);
      index -= 2;
    }
    if (arr[index] === "SOUTH" && arr[index + 1] === "NORTH") {
      arr.splice(index, 2);
      index -= 2;
    }
    if (arr[index] === "EAST" && arr[index + 1] === "WEST") {
      arr.splice(index, 2);
      index -= 2;
    }
    if (arr[index] === "WEST" && arr[index + 1] === "EAST") {
      arr.splice(index, 2);
      index -= 2;
    }
  }
  return arr;
}

// BETTER SOLUTIONS

function dirReduc(plan) {
  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

function dirReduc(arr) {
  var str = arr.join(""),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, "");
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
