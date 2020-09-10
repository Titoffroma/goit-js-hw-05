function formatString(string, maxLength = 40) {
  // Write code under this line
  if (string.length > maxLength) {
    string = string.split("");
    string.splice(maxLength, string.length - maxLength, ".", ".", ".");
    string = string.join("");
  }
  return string;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
