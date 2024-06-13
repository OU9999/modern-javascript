const sleep = (func, delay) => {
  const delayUntil = Date.now() + delay;

  while (Date.now() < delayUntil) {}

  func();
};

const foo = () => {
  console.log("foo");
};

const bar = () => {
  console.log("bar");
};

// sleep 함수는 3초 이상 실행된다.
sleep(foo, 3 * 1000);

// bar 함수는 sleep 함수의 실행이 종료된 이후에 호출되므로 3초 이상 블로킹된다.
bar();
