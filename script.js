function spawnRoses() {
  for (let i = 0; i < 50; i++) {
    const rose = document.createElement("div");
    rose.className = "rose";
    rose.innerText = "🌹";

    rose.style.left = Math.random() * window.innerWidth + "px";
    rose.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(rose);

    setTimeout(() => rose.remove(), 4000);
  }
}
