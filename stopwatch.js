// script.js
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCount = 0;

function start() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function pause() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    document.getElementById('time').innerHTML = '00:00:00';
    document.getElementById('laps').innerHTML = '';
    running = false;
    lapCount = 0;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
}

document.getElementById('lap').addEventListener('click', function() {
    if (running) {
        lapCount++;
        let lapTime = document.createElement('div');
        lapTime.className = 'lap';
        lapTime.textContent = 'Lap ' + lapCount + ': ' + document.getElementById('time').innerHTML;
        document.getElementById('laps').appendChild(lapTime);
    }
});
