window.defineBlock({
  blockDefinition: {
    name: "event-countdown",
    attributes: {
      eventDate: {
        type: "string",
        default: "2025-12-09",
        label: {
          en: "Event Date",
          de: "Eventdatum"
        }
      }
    },
    label: {
      en: "Countdown",
      de: "Countdown"
    },
    iconUrl: "https://infranet-ir.github.io/Countdown/icon.svg"
  },
  factory: ({ attributes }) => {
    const el = document.createElement("div");
    el.innerHTML = `
      <div style="text-align:center; font-family:sans-serif;">
        <h2>Countdown zum Event</h2>
        <div class="countdown-container" style="display:flex; justify-content:center; gap:1rem;">
          <div><div class="days" style="font-size:2rem;">0</div><div>Tage</div></div>
          <div><div class="hours" style="font-size:2rem;">0</div><div>Std</div></div>
          <div><div class="minutes" style="font-size:2rem;">0</div><div>Min</div></div>
          <div><div class="seconds" style="font-size:2rem;">0</div><div>Sek</div></div>
        </div>
      </div>
    `;

    function updateCountdown(targetDate) {
      const now = new Date();
      const eventDate = new Date(targetDate);
      const diff = eventDate - now;

      if (diff <= 0) {
        el.innerHTML = "<p>Das Event hat bereits stattgefunden.</p>";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      el.querySelector(".days").innerText = days;
      el.querySelector(".hours").innerText = hours;
      el.querySelector(".minutes").innerText = minutes;
      el.querySelector(".seconds").innerText = seconds;
    }

    const targetDate = attributes.eventDate || '2025-12-09';
    updateCountdown(targetDate);
    setInterval(() => updateCountdown(targetDate), 1000);

    return el;
  }
});
