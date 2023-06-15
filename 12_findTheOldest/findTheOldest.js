const findTheOldest = function(array) {
  return array.reduce((prev, current) => {
    if (!prev.yearOfDeath) {
      prev.yearOfDeath = new Date().getFullYear();
    } else if (!current.yearOfDeath) {
      current.yearOfDeath = new Date().getFullYear();
    }
    const prevAge = prev.yearOfDeath - prev.yearOfBirth; 
    const currentAge = current.yearOfDeath - current.yearOfBirth;
    if (prevAge > currentAge) {
      return prev;
    } else {
      return current;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
