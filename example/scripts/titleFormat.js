const titleFormat = (title) => {
  const titleToLower = title.toLowerCase();
  const firstLetter = titleToLower.charAt(0).toUpperCase();
  const restOfTitle = titleToLower.slice(1);
  return firstLetter + restOfTitle;
};

console.log(titleFormat("hello world"));
console.log(titleFormat("HELLO world"));
console.log(titleFormat("HellO WOrLd"));
