function celebrate() {
  const age = document.getElementById("ageInput").value;
  const balloonContainer = document.getElementById("balloon-container");
  const confettiContainer = document.getElementById("confetti-container");

  // Clear previous balloons and confetti
  balloonContainer.innerHTML = "";
  confettiContainer.innerHTML = "";

  if (age && age > 0) {
      for (let i = 0; i < age; i++) {
          createBalloon();
          createConfetti();
      }

      // Play the birthday song
      const birthdaySong = document.getElementById("birthdaySong");
      birthdaySong.play();
  } else {
      alert("Please enter a valid age.");
  }
}

// Create a single balloon
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Random colors
  const colors = ["red", "blue", "yellow", "green", "purple", "orange"];
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  // Random positioning
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.getElementById("balloon-container").appendChild(balloon);

  // Remove balloon after animation
  setTimeout(() => {
      balloon.remove();
  }, 5000);
}

// Create confetti
function createConfetti() {
  for (let i = 0; i < 15; i++) { // More confetti
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      // Random colors
      const colors = ["red", "blue", "yellow", "green", "purple", "pink"];
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      // Random positioning
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = Math.random() * 100 + "vh";
      confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

      document.getElementById("confetti-container").appendChild(confetti);

      // Remove confetti after animation
      setTimeout(() => {
          confetti.remove();
      }, 3000);
  }
}
