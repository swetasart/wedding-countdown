// Wedding date: 11 February 2027, midnight in India (IST).
// Change the time below if your ceremony starts at a specific hour.
const weddingDate = new Date("2027-02-11T00:00:00+05:30").getTime();

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  caption: document.getElementById("countdown-caption")
};

const pad = (number, length = 2) => String(number).padStart(length, "0");

function updateCountdown() {
  const difference = weddingDate - Date.now();

  if (difference <= 0) {
    elements.days.textContent = "000";
    elements.hours.textContent = "00";
    elements.minutes.textContent = "00";
    elements.seconds.textContent = "00";
    elements.caption.textContent = "Today, our forever begins. ♥";
    return;
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  elements.days.textContent = pad(days, 3);
  elements.hours.textContent = pad(hours);
  elements.minutes.textContent = pad(minutes);
  elements.seconds.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// A few subtle floating sparkles; purely decorative.
const sparkleLayer = document.querySelector(".sparkles");
for (let i = 0; i < 18; i++) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = Math.random() > 0.5 ? "✦" : "·";
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.bottom = `${-10 - Math.random() * 40}%`;
  sparkle.style.fontSize = `${8 + Math.random() * 12}px`;
  sparkle.style.animationDuration = `${12 + Math.random() * 18}s`;
  sparkle.style.animationDelay = `${Math.random() * 18}s`;
  sparkleLayer.appendChild(sparkle);
}
