const value = 1;

const obj = {
  value: 100,
  foo() {
    setTimeout(() => {
      console.log(this.value);
    }, 100);
  },

  fus() {
    setTimeout(
      function () {
        console.log(this.value);
      }.bind(this),
      100
    );
  },
};

obj.foo();
obj.fus();
