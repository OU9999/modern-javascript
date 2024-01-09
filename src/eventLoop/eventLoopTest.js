const printHello = () => {
  console.log("Hello");
};

const blockFor1Sec = () => {
  // 1초 동안 블로킹
  let start = Date.now();
  while (Date.now() - start < 1000) {}
};

setTimeout(printHello, 0);

blockFor1Sec();
console.log("World");
