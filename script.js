let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time, includeMilliseconds = false) {
    let ms = Math.floor((time % 1000) / 10); // Milliseconds (two digits)
    let seconds = Math.floor((time / 1000) % 60); // Seconds
    let minutes = Math.floor((time / (1000 * 60)) % 60); // Minutes
    let hours = Math.floor(time / (1000 * 60 * 60)); // Hours

    let formattedSeconds = seconds.toString().padStart(2, "0");
    let formattedMinutes = minutes.toString().padStart(2, "0");
    let formattedHours = hours.toString().padStart(2, "0");

    let timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    if (includeMilliseconds) {
        let formattedMs = ms.toString().padStart(2, "0");
        timeString += `:${formattedMs}`;
    }
    return timeString;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.querySelector(".display").innerText = timeToString(elapsedTime, true); // Show milliseconds during updates
    }, 10); // Update every 10ms
}

function stop() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    document.querySelector(".display").innerText = "00:00:00"; // Reset to initial state without milliseconds
}

// Event listeners for buttons
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
