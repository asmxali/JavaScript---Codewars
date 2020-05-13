// MY SOLUTION //

function toCamelCase(str) {
  //handle empty strings
  if (str) {
    // split the string wherevers theres a dash or underscore
    // repace dash or underscore with space
    let words = str.replace(/-|_/g, " ").split(" ");

    //loop through each word and capitalize the first letter
    let capitalizedWords = words.map(
      (word) => word[0].toUpperCase() + word.slice(1)
    );

    //join the words back together with space
    let capitalizedSentence = capitalizedWords.join("");

    //check if first letter is capital
    if (str[0] === str[0].toUpperCase()) {
      return capitalizedSentence;
    } else {
      return (
        capitalizedSentence[0].toLowerCase() + capitalizedSentence.slice(1)
      );
    }
  } else {
    return "";
  }
}
