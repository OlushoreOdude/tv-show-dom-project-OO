let test = document.querySelectorAll(".flip-container");
console.log(test[0]);
test.forEach((el) => {
  el.addEventListener("click", function () {
    console.log(this, 1);
    el.classList.toggle("hover");
  });
});
