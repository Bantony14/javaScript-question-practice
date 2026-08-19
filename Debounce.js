function debounce() {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("api call");
    }, 5000);
  };
}

let search = debounce();

search();
search();
