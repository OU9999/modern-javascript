const x = 1;

const foo = () => {
  const y = 2;

  const bar = () => {
    const z = 3;
    console.log(x + y + z);
  };

  bar();
};

foo(); // 6
