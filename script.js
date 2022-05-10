const minutes_ele = document.getElementById("minutes");
const seconds_ele = document.getElementById("seconds");
const timer_btn_ele = document.getElementById("timer_btn");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");

timer_btn_ele.addEventListener("click", function () {
  let seconds = seconds_ele.value;
  let minutes = minutes_ele.value;

  const x = setInterval(function () {
    minutes_ele.disabled = true;
    seconds_ele.disabled = true;
    timer_btn_ele.disabled = true;
    --seconds;

    if (seconds < 0) {
      seconds = 59;
      --minutes;
    }

    if (minutes < 1 && seconds == 0) {
      clearInterval(x);
      minutes_ele.disabled = false;
      seconds_ele.disabled = false;
      timer_btn_ele.disabled = false;
      minutes_ele.value = 00;
      seconds_ele.value = 00;
    }

    seconds_ele.value = seconds < 10 ? "0" + seconds : seconds;
    if (minutes < 10) {
      minutes_ele.value = minutes;
      minutes_ele.style.textAlign = "right";
    } else {
      minutes_ele.value = minutes;
      minutes_ele.style.textAlign = "center";
    }
  }, 1000);

  reset.addEventListener("click", function () {
    clearInterval(x);
    minutes_ele.disabled = false;
    seconds_ele.disabled = false;
    timer_btn_ele.disabled = false;
    minutes_ele.value = "10";
    seconds_ele.value = "00";
  });

  stop.addEventListener("click", function () {
    clearInterval(x);
    timer_btn_ele.disabled = false;
  });
});
