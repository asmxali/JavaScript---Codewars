// MY SOLUTION

function friend(friends) {
  //your code here
  //create a variable to store results
  let myFriends = [];

  //loop through friends array
  for (let friend of friends) {
    // check if friend is a 4 letter name
    if (friend.length === 4) {
      myFriends.push(friend);
    }
  }

  //return list of my friends
  return myFriends;
}

// BETTER SOLUTION
function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
