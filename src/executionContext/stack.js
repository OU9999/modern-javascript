const x = 1;

const foo = () => {
  const y = 2;
  const bar = () => {
    const z = 3;
    console.log(x + y + z);
  };
  bar();
};

foo();

/*
실행 컨텍스트는 스택 자료구조로 관리된다.
이를 실행 컨텍스트 스택이라고 부른다.
위 코드를 실행하면 코드가 실행되는 시간의 흐름에 따라 실행 컨텍스트는 다음과 같이 실행 컨텍스트가 push 되고 pop 된다.(365 페이지)
 */
