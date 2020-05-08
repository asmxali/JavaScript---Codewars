// my solution
function alphabetPosition(text) {
  let results = [];
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  text = text.toLowerCase();
  for (let i of text) {
    alphabet.forEach((value, position) => {
      if (value === i) {
        console.log(value);
        results.push(position + 1);
      }
    });
  }

  results = results.join(" ");
  return results;
}

// better solution

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}
