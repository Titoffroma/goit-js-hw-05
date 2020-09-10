function findLongestWord(string = "") {
  const array = string.split(" ");
  let wordLength = 0;
  let largestWord = "";
  for (let i = 0; i < array.length; i += 1) {
    if (wordLength < array[i].length) {
      largestWord = array[i];
      wordLength = array[i].length;
    }
  }
  // Write code under this line
  return largestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
