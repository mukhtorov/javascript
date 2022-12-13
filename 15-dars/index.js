// Recursion functions

// n=4
// const sum = (n) => {
//   let s = 0;
//   for (let i = 1; i <= n; i++) {
//     s += i;
//   }
//   console.log(s);
// };

// let res = 0;
// const sum = (n) => {
//   if (n === 1) return (res = res + 1);
//   else {
//     res += n;
//     return sum(n - 1);
//   }
// };

// sum(4); // 4+3+2+1
// console.log(res);

let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function getCalc(company) {
  if (Array.isArray(company)) {
    // case (1)
    return company.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(company)) {
      sum += getCalc(subdep); // recursively call for subcompanys, sum the results
    }
    return sum;
  }
}

getCalc(company);
