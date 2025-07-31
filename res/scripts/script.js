document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('landing-form');
  const inputScreen = document.getElementById('input-screen');
  const resultScreen = document.getElementById('result-screen');
  const vspeedValue = document.getElementById('vspeed-value');
  const butterText = document.getElementById('butter-text');
  const gValue = document.getElementById('g');
  const gvSpan = document.getElementById('gv');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const vspeed = parseFloat(document.getElementById('vspeed').value);
    const g = gValue.value.trim();

    inputScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    vspeedValue.textContent = vspeed.toFixed(2);

    if (g === "") {
      gvSpan.innerHTML = "&quest;";
    } else {
      const gParsed = parseFloat(g);
      gvSpan.textContent = isNaN(gParsed) ? "?" : gParsed.toFixed(2);
    }

    butterText.className = 'butter';

    if (vspeed <= 0 && vspeed > -125) {
      butterText.textContent = "BUTTER!";
      butterText.classList.add('blink', 'butter-yellow');
    } else if (vspeed <= -125 && vspeed > -250) {
      butterText.textContent = "GREAT LANDING!";
      butterText.classList.add('blink', 'great-green');
    } else if (vspeed <= -250 && vspeed > -350) {
      butterText.textContent = "ACCEPTABLE!";
      butterText.classList.add('blink', 'acceptable-green');
    } else if (vspeed <= -350 && vspeed > -600) {
      butterText.textContent = "HARD LANDING!";
      butterText.classList.add('blink', 'hard-orange');
    } else if (vspeed <= -600) {
      butterText.textContent = "* WASTED! *";
      butterText.classList.add('blink', 'wasted-red');
    } else {
      butterText.textContent = "ERROR!\n VS MUST BE NEGATIVE";
      butterText.classList.add('wasted-red');
    }
  });
});
