// DOM Elements
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
// Set up the time
const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  // judge our hour like 0-12 formatter
  if (currentHour > 12) {
    currentHour -= 12;
  }
  // when the time length is two but we don not have enough time to show we have use '0' to fill up time
  hourEl.textContent = currentHour.toString();
  minuteEl.textContent = currentMinute.toString().padStart(2, "0");
};
setInterval(updateTime, 1000);
// avoid the first null
updateTime();
