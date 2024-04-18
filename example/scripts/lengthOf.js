const lengthOf = (phrase) => {
  const fixPhrase = phrase.trim();
  return fixPhrase === "" ? "Invalid Input" : fixPhrase.length;
};

console.log(lengthOf("hello"));
console.log(lengthOf(""));
