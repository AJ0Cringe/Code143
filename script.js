function checkAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const msg = document.getElementById("message");

  if (input === "sajan") {
    triggerSurprise("For you 🌹");
  } 
  else if (input === "amitha") {
    triggerSurprise("For my dearest sister ..Pothan Vava 🌹");
  } 
  else {
    alert("Try again 🙂");
  }
}

function triggerSurprise(text) {
  document.getElementById("container").style.display = "none";

  showRoses();

  const msg = document.getElementById("message");
  msg.textContent = text;
  msg.classList.add("show");
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
