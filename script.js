const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

const timer = document.querySelector(".timer");

let count = 50;
let id;

startBtn.addEventListener("click", () => {
  id = setInterval(() => {
    count++;
    console.log(count);
    if (count < 10) {
      timer.textContent = `00:0${count}`;
    } else if (count >= 10 && count < 60) {
      timer.textContent = `00:${count}`;
    } else if (count >= 60) {
      let minutes = Math.floor(count / 60);
      let seconds = count % 60;
      console.log(seconds);
      if (seconds < 10) {
        timer.textContent = `0${minutes}:0${seconds}`;
      } else if (seconds >= 10) {
        timer.textContent = `0${minutes}:${seconds}`;
      }
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(id);
});

resetBtn.addEventListener("click", () => {
  clearInterval(id);
  count = 0;
  timer.textContent = "00:00";
});
