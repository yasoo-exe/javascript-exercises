const getTheTitles = function (obj) {
  let result = [];
  obj.forEach((element) => {
    result.push(element.title);
  });
  return result;
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
