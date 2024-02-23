let i = 10;

const foo = () => {
  let i = 100;

  for (let i = 0; i < 3; i++) {
    console.log(i); // 0 , 1 , 2
  }

  console.log(i); // 100
};

foo();

console.log(i); // 10

/**
 * let,const 키워드로 선언된 변수는 블록 레벨 스코프를 따른다.
 */
