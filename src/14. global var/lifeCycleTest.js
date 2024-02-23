const x = "global";

const foo = () => {
  console.log(x);
  const x = "local";
};

foo();
console.log(x);
