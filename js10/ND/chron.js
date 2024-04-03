const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerInput = document.getElementById("timer");

let timerId;
let totalMilliseconds = 0;

function updateTimerDisplay() {
    const milliseconds = totalMilliseconds % 1000;
    const seconds = Math.floor(totalMilliseconds / 1000) % 60;
    const minutes = Math.floor(totalMilliseconds / (1000 * 60));
    timerInput.value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

function startTimer() {
    timerId = setInterval(() => {
        totalMilliseconds += 10;
        updateTimerDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(timerId);
}

function resetTimer() {
    clearInterval(timerId);
    totalMilliseconds = 0;
    updateTimerDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
