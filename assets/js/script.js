const btn = document.querySelector(".btn");
const popup = document.querySelector(".popup-wrapper");

btn.addEventListener("click", function () {
  // можно повесить на body overflow: hidden, чтобы страница не скроллилась, когда открыт попап
  popup.classList.add("popup--opened");
});

popup.addEventListener("click", function (e) {
  if (e.target === this) {
    popup.classList.remove("popup--opened");
  }
});
