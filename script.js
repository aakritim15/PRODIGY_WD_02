console.log("Stopwatch")

let seconds = 0;
let tens = 0;
let minutes = 0;
let getMinutes = document.querySelector('.minutes')
let getSeconds = document.querySelector('.seconds')
let getTens = document.querySelector('.tens')
let btnStart = document.querySelector('.btn-start')
let btnStop = document.querySelector('.btn-stop')
let btnReset = document.querySelector('.btn-reset')
let btnLap = document.querySelector('.btn-lap')
let btnEnd = document.querySelector('.btn-end')
let interval;
let lapCount = 1;

const startTime = () => {
    interval = setInterval(updateTime, 10);
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnLap.disabled = false;
    btnEnd.disabled = false;
}

const updateTime = () => {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0
    }
}

btnStart.addEventListener('click', startTime);

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    btnStart.disabled = false;
    btnStop.disabled = true;
    btnLap.disabled = true;
    btnEnd.disabled = false;
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    getTens.innerHTML = tens;
    getSeconds.innerHTML = seconds;
    getMinutes.innerHTML = minutes;
    btnStart.disabled = false;
    btnStop.disabled = true;
    btnLap.disabled = true;
    btnEnd.disabled = true;
    document.querySelector('.laps').innerHTML = '';
    lapCount = 1;
})

btnLap.addEventListener('click', () => {
    const lapTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}:${tens < 10 ? '0' + tens : tens}`;
    const lapList = document.querySelector('.laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount++}: ${lapTime}`;
    lapList.appendChild(lapItem);
})

btnEnd.addEventListener('click', () => {
    clearInterval(interval);
    btnStart.disabled = true;
    btnStop.disabled = true;
    btnLap.disabled = true;
    btnEnd.disabled = true;
})
