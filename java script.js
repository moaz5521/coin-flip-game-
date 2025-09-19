const btn = document.getElementById("flipBtn");
const resultDiv = document.getElementById("result");
const Tails = document.getElementById("tail")
const Heads = document.getElementById("head")
const resultDiv1 = document.getElementById("result1");

Tails.addEventListener("click", () => {
  const coin = Math.random() < 0.5 ? "Heads" : "Tails";

  if (coin === "Tails") {
    resultDiv.textContent = "🪙 Tails! 🎉 You Win!";
    resultDiv.style.color = "lightgreen";
  } else {
    resultDiv.textContent = "🪙 Head! ❌ You Lose!";
    resultDiv.style.color = "tomato";
  }
});
Heads.addEventListener("click", () => {
  const coin = Math.random() < 0.5 ? "Heads" : "Tails";

  if (coin === "Heads") {
    resultDiv.textContent = "🪙 Head! 🎉 You Win!";
    resultDiv.style.color = "lightgreen";
  } else {
    resultDiv.textContent = "🪙 Tail! ❌ You Lose!";
    resultDiv.style.color = "tomato";
  }
});