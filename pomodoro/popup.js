let timer;
let minutes = 25;
let seconds = 0;
let isPaused = false;
let enteredTime = null;

const timerEl = document.getElementById("timer");
const toggleBtn = document.getElementById("toggleBtn");
const restartBtn = document.getElementById("restartBtn");
const chooseBtn = document.getElementById("chooseBtn");

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timerEl.textContent = formatTime(minutes, seconds);

    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert("Time is up! Take a break.");
    } else if (!isPaused) {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            minutes--;
        }
    }
}

function formatTime(min, sec) {
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

toggleBtn.onclick = () => {
    isPaused = !isPaused;

    if (isPaused) {
        clearInterval(timer);
        toggleBtn.textContent = "Resume";
    } else {
        startTimer();
        toggleBtn.textContent = "Pause";
    }
};

restartBtn.onclick = () => {
    clearInterval(timer);
    minutes = enteredTime || 25;
    seconds = 0;
    isPaused = false;
    timerEl.textContent = formatTime(minutes, seconds);
    toggleBtn.textContent = "Pause";
    startTimer();
};

chooseBtn.onclick = () => {
    const newTime = prompt("Enter new time (minutes):");
    if (!isNaN(newTime) && newTime > 0) {
        enteredTime = parseInt(newTime);
        minutes = enteredTime;
        seconds = 0;
        isPaused = false;
        timerEl.textContent = formatTime(minutes, seconds);
        clearInterval(timer);
        toggleBtn.textContent = "Pause";
        startTimer();
    } else {
        alert("Invalid time — try again.");
    }
};

// Start automatically when popup opens
startTimer();
