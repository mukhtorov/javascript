// const getData = (a) => (b) => (c) => a + b + c;

const operations = (type) => {
  return (a) => (b) => (c) => {
    switch (type) {
      case "add":
        return a + b + c;
        break;
      case "divide":
        return a / b / c;
        break;
      case "multiply":
        return a * b * c;
        break;
    }
  };
};

const math = operations("multiply");

console.log(math(2)(2)(3));
console.log(math("multiply", 2, 2, 33, 4, 5, 5, 6, 6));
