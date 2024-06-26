const foo = () => {
  console.log("foo");
};

const bar = () => {
  console.log("bar");
};

// 타이머 함수 setTimeout은 bar 함수를 블로킹하지 않는다.
setTimeout(foo, 3 * 1000);
bar();
// bar 호출 3초 경과후 foo 호출
