var x = "global";
function quux() {
  console.log(this.x);
}
quux();
