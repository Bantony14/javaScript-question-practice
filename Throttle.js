function throttle() {
  let callApi = false;
  return function () {
    if (callApi === true) {
      return console.log("please wait till api gives response");
    }
    callApi = true;
    console.log("call Api");
    setTimeout(() => {
      callApi = false;
    }, 3000);
  };
}

const clickButton = throttle();

clickButton();
clickButton();
