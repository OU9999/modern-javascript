const sum = (...args) => {
  return args.reduce((pre, cur) => {
    console.log("pre>>", pre);
    console.log("cur>>", cur);
    return pre + cur;
  }, 0);
};

console.log(sum(2, 5));
console.log(sum(1, 2, 3, 4, 5));
