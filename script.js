var timer = document.querySelector(".timer");
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");
var lapBtn = document.getElementById("lap");
var lapArea = document.querySelector(".lap-list");

var seconds = 0;
var interval = null;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", setlap);

function stopWatch() {
  seconds++;

  var hour = Math.floor(seconds / 3600);
  var mins = Math.floor((seconds - (hour * 3600)) / 60);
  var secs = seconds % 60;

  if (secs < 10) {
    secs = '0' + secs;
  }
  if (mins < 10) {
    mins = '0' + mins;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }

  timer.innerHTML = `${hour}:${mins}:${secs}`;
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(stopWatch, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  if (confirm("Are you sure to reset?")) {
    stop();
    seconds = 0;
    timer.innerHTML = `00:00:00`;
  }
  else {
    stop();
  }
}

function setlap() {
  var p = document.createElement("p");
  var spanRef = document.createElement("span");
  spanRef.setAttribute("class", "remove-lap");
  spanRef.innerHTML = "X";
  p.innerHTML = timer.innerHTML;
  lapArea.appendChild(p);
  lapArea.append(spanRef);

  spanRef.addEventListener("click", () => {
    lapArea.removeChild(p);
    lapArea.removeChild(spanRef);
  });
}
