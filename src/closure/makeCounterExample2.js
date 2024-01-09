//case 2
const makeCounter = (aux) => {
  let counter = 0;
  return () => {
    counter = aux(counter);
    return counter;
  };
};

const increase = (n) => ++n;
const decrease = (n) => --n;

const increaser = makeCounter(increase);
const decreaser = makeCounter(decrease);

console.log(increaser());
console.log(increaser());

console.log(decreaser());
console.log(decreaser());

/*
  case 2 : 독립적인 렉시컬 환경을 갖기 때문에 카운터 상태가 연동하지 않는다.
   */
