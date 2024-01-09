const fns = [];

for (let i = 0; i < 3; i++) {
  fns[i] = () => i;
}

for (let i = 0; i < fns.length; i++) {
  console.log(fns[i]());
}
