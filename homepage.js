function updateClock() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  minutes = (minutes < 10 ? "0" : "") + minutes;

  let clockDisplay = document.getElementById("clockDisplay");
  clockDisplay.textContent = hours + ":" + minutes;

  setTimeout(updateClock, 1000);
}

updateClock();
