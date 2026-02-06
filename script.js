function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();

  if (input === "sajan") {
    document.getElementById("container").style.display = "none";

    showRoses();

    const msg = document.getElementById("message");
    msg.classList.add("show");
  } else {
    alert("Try again 🙂");
  }
}

function showRoses() {
  for (let i = 0; i < 80; i++) {
    const rose = document.createElement("div");
    rose.className = "rose";
    rose.innerText = "🌹";

    rose.style.left = Math.random() * window.innerWidth + "px";
    rose.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(rose);

    setTimeout(() => rose.remove(), 4000);
  }
}
