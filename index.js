const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  const titleCasedTutorials = [];

// Iterate through each tutorial title as required.
//Also use let
  for (let i = 0; i < tutorials.length; i++) {
    let title = tutorials[i];
    let words = title.split(' ');

    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);//returns the character using charAt()
      words[j] = capitalizedWord;
    }

  //join the words back into a title and push into result array
    let capitalizedTitle = words.join(' ');
    titleCasedTutorials.push(capitalizedTitle);
  }

  return titleCasedTutorials;
}

console.log(titleCased());
