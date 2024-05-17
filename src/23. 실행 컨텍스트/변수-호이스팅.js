let foo = 1;
{
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 2;
}

const poop = 1;
{
  console.log(poop); // ReferenceError: Cannot access 'poop' before initialization
  const poop = 2;
}

// let, const 키워드로 선언한 변수도 호이스팅이 발생하는건 변함이없다.
// 단, let, const 키워드로 선언한 변수는 런타임에 컨트롤이 변수 선언문에 도달하기 전까지 일시적 사각지대에 빠지기 때문에
// 참조할 수 없다.
