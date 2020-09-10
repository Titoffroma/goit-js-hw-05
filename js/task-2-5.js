function checkForSpam(str) {
  "use strict";
  // Write code under this line
  let result = false;
  if (str.toLowerCase().indexOf("spam") >= 0) {
    result = true;
  }
  if (str.toLowerCase().indexOf("sale") >= 0) {
    result = true;
  }
  //   const message = str.toLowerCase().split(" ");

  //   for (const words of message) {
  //     let checkWord = words.toLowerCase();
  //     if (checkWord === "spam" || checkWord === "sale") {
  //       result = true;
  //     }
  //   }

  //   if (message.includes("spam") || message.includes("sale")) {
  //     result = true;
  //   }
  return result;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best Sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
