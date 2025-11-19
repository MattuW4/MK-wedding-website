// Wedding date
const weddingDate = new Date("2026-08-08T00:00:00").setHours(0, 0, 0, 0);

const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

const timeLeft = weddingDate - now.getTime();

  const days = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

  if (days <= 0) {
    countdown.innerHTML = "The day is here! We are looking forward to celebrating with you x";
    clearInterval(interval);
    return;
  }

  countdown.innerHTML = `${days} day${days !== 1 ? 's' : ''} to go until the big day!`;
}

const interval = setInterval(updateCountdown, 1000 * 60 * 60); 
updateCountdown();

