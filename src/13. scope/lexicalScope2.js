const x = 1;

const outerFn = () => {
  const x = 10;
  innerFn();
};

const innerFn = () => {
  console.log(x);
};

outerFn();
innerFn();

/*
답은 둘다 1이다.이와 같은 현상이 발생하는 이유는 자바스크립트가 렉시컬 스코프를 따르는 프로그래밍 언어이기 때문이다.
*/
