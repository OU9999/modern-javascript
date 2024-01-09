const increase = (() => {
  let num = 0;
  return () => {
    return ++num;
  };
})();

console.log(increase());
console.log(increase());
console.log(increase());

/*
즉시 실행 함수 참조
 */
