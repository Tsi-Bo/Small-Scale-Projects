"use sctrict";

// select items
const showBtn1 = document.querySelector(".qst1");
const showBtn2 = document.querySelector(".qst2");
const showBtn3 = document.querySelector(".qst3");

showBtn1.addEventListener("click", function (e) {
  const answer = document.querySelector(".answer-container1");
  answer.classList.toggle("hidden");
});

showBtn2.addEventListener("click", function (e) {
  const answer = document.querySelector(".answer-container2");
  answer.classList.toggle("hidden");
});
showBtn3.addEventListener("click", function (e) {
  const answer = document.querySelector(".answer-container3");
  answer.classList.toggle("hidden");
});

// showBtn.forEach(function (e) {
//   e.addEventListener("click", function () {
//     if (e.parentElement.classList.contains("hidden")) {
//       e.parentElement.classList.remove("hidden");
//     } else {
//       e.classList.add("hidden");
//     }
//   });
// });
