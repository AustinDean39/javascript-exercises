const palindromes = function (str) {
  let strArr = str.toLowerCase()
                  .split('')
                  .filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'));
  console.log(strArr.join(''));
  return strArr.every((value, index) => value === strArr[strArr.length - (index + 1)]);
};

// IF LETTER IS THE SAME AS AT (ARRAY/STRING LENGTH) - (INDEX OF LETTER) FOR ALL LETTERS, THEN IT IS A PALINDROME

// Do not edit below this line
module.exports = palindromes;
