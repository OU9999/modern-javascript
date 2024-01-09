const x = 1;

const outer = () => {
  const x = 10;
  const inner = () => console.log(x);
  return inner;
};

const innerFn = outer();
innerFn();

/*
외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료 한 외부 함수의
변수를 참조할 수 있다. 이러한 중첩 함수를 클로저(closure) 라고 부른다.
 */
