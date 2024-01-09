//case 1
const counter = (() => {
  let counter = 0;
  return (aux) => {
    counter = aux(counter);
    return counter;
  };
})();

const increase = (n) => ++n;
const decrease = (n) => --n;

/*
case 1 : 렉시컬 환경을 공유하는 클로저
 */
