const findTheOldest = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].yearOfDeath) {
      arr[i].yearOfDeath = 2023;
    }
  }
  let result = [];
  arr.map((x) => {
    return result.push({ name: x.name, age: x.yearOfDeath - x.yearOfBirth });
  });
  return result.sort((a, b) => {
    return a.age < b.age ? 1 : -1;
  })[0];
};

console.log(
  findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ])
);

// Do not edit below this line
module.exports = findTheOldest;
