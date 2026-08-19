function outer(a) {
  return function inner(b) {
    return function deep(c) {
      console.log(a + b + c);
    };
  };
}
console.log(outer(10)(20)(30));
