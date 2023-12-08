let rollBtn = document.querySelector(".dice-btn");
let rollResult = document.querySelector("#roll-result");
let rollCmt = document.querySelector(".roll-comment");

rollBtn.onclick = function () {
  let rollNmb = Number(document.getElementById("quantity").value);
  console.log(rollNmb, typeof rollNmb);

  if (rollNmb <= 100) {
    let result = Math.floor(Math.random() * rollNmb + 1);
    rollResult.textContent = result;
    rollCmt.textContent = `You rolled ${result}!`;
  } else if (rollNmb > 100) {
    rollCmt.textContent = "Choose a number between 2 and 100!";
  }
};
