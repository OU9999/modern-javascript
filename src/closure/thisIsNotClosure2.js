const foo = () => {
  const x = 1;

  //bar 함수는 클로저였지만 곧바로 소멸한다.
  //이러한 함수는 일반적으로 클로저라고 하지 않는다.
  const bar = () => {
    console.log(x);
  };

  return bar;
};

foo();

/*
  bar 중첩함수는 상위 스코프의 식별자를 참조하고 있으므로 클로저다. 
  하지만 외부 함수 foo의 외부로 중첩 함수 bar가 반환되지 않는다.
  즉, 외부 함수 foo 보다 중첩 함수 bar의 생명 주기가 짧다.
  이런 경우 중첩 함수 bar는 클로저였지만 외부 함수보다 일찍 소멸되기 때문에
  생명 주기가 종료된 외부 함수의 식별자를 참조할 수 있다는 클로저의 본질에 부합하지 않는다.
   */
