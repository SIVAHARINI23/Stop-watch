=
let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let laps = document.getElementById("laps");

function updateDisplay() {
    display.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function start() {
    if (timer) return;
    timer = setInterval(() => {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }, 1000);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    timer = null;
    laps.innerHTML = "";
}

function lap() {
    let li = document.createElement("li");
    li.innerText = display.innerText;
    laps.appendChild(li);
}
