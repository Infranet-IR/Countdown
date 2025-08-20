function updateCountdown(targetDate) {
  const container = document.querySelector(".countdown-container");
  if (!container) return;

  const now = new Date();
  const eventDate = new Date(targetDate);
  const diff = eventDate - now;

  if (isNaN(eventDate.getTime())) {
    container.innerHTML = "<p>Ungültiges Datum.</p>";
    return;
  }

  if (diff <= 0) {
    container.innerHTML = "<p>Das Event hat bereits stattgefunden.</p>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const updateText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
  };

  updateText("days", days);
  updateText("hours", hours);
  updateText("minutes", minutes);
  updateText("seconds", seconds);
}

function startCountdown(config) {
  const targetDate = config?.eventDate || '2025-12-09';

  // Initialer Aufruf
  updateCountdown(targetDate);

  // Intervall starten
  setInterval(() => updateCountdown(targetDate), 1000);
}

// Staffbase Plugin Hook (für Staffbase Classic Widgets)
window.plugins = window.plugins || {};
window.plugins['event-countdown'] = {
  render: function (config) {
    startCountdown(config);
  }
};
