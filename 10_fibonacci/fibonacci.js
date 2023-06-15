const fibonacci = function(place) {
  if (place === 1) return 1;
  if (place < 1) return 'OOPS';
  let prev = 0;
  let current = 1;
  for (let i = 2; i <= parseInt(place); i++) {
    let sum = current + prev;
    prev = current;
    current = sum;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
