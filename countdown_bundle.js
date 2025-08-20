window.registerWidgetBundle('event-countdown', (api) => {
  api.registerWidget({
    id: 'event-countdown',
    render: ({ targetEl }) => {
      targetEl.innerHTML = '<p>Widget läuft!</p>';
    },
    config: {}
  });
});


/*
window.registerWidgetBundle('event-countdown', async (api) => {
  api.registerWidget({
    id: 'event-countdown',
    render: async ({ config, targetEl }) => {
      targetEl.innerHTML = `
        <div style="text-align:center; font-family:sans-serif;">
          <h2>Countdown zum Event</h2>
          <div class="countdown-container" style="display:flex; justify-content:center; gap:1rem;">
            <div><div id="days" style="font-size:2rem;">0</div><div>Tage</div></div>
            <div><div id="hours" style="font-size:2rem;">0</div><div>Std</div></div>
            <div><div id="minutes" style="font-size:2rem;">0</div><div>Min</div></div>
            <div><div id="seconds" style="font-size:2rem;">0</div><div>Sek</div></div>
          </div>
        </div>
      `;

      function updateCountdown(targetDate) {
        const now = new Date();
        const eventDate = new Date(targetDate);
        const diff = eventDate - now;

        if (diff <= 0) {
          targetEl.innerHTML = "<p>Das Event hat bereits stattgefunden.</p>";
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
      }

      const targetDate = config.eventDate || '2025-12-09';
      updateCountdown(targetDate);
      setInterval(() => updateCountdown(targetDate), 1000);
    },
    config: {
      eventDate: {
        type: 'string',
        label: {
          en: 'Event Date (YYYY-MM-DD)',
          de: 'Eventdatum (JJJJ-MM-TT)'
        },
        default: '2025-12-09'
      }
    }
  });
});
*/

