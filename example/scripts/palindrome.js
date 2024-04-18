const palindrome = (phrase) => {
  const fixPhrase = phrase.trim().toLowerCase();
  const reversePhrase = fixPhrase.split("").reverse().join("");

  return fixPhrase === reversePhrase;
};

console.log(palindrome("anitalavalatina"));
console.log(palindrome("hannah"));
