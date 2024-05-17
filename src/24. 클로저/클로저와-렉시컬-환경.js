const x = 1;

const outer = () => {
  const x = 10;
  const inner = () => {
    console.log(x);
  };

  return inner;
};

const innerFunc = outer();
innerFunc(); // 10

/*
외부 함수(outer)의 생명주기가 끝났지만 outer의 지역 변수인 10, 즉 outer의 렉시컬 환경은 제거되지 않았다.
이 처럼 outer 함수의 실행 컨텍스트가 스택에서 제거 되어도, 
(렉시컬 환경을 참조하고 있다면) outer 함수의 렉시컬 환경까지 소멸하는 것은 아니다.
 */
