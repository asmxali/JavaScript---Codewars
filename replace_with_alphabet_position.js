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
