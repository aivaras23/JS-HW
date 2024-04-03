const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

const timer = document.getElementById('timer');


let sec = 0;
let min = 0;
let hour = 0;
let interval;
let timerRunning = false;

const startTimer = () => {
    if (!timerRunning) {
        timerRunning = true;
        startBtn.textContent = 'Stabdyti'
        interval = setInterval(() => {
            sec++;
            if (sec === 60) {
                min++;
                sec = 0;
            }
            if (min === 60) {
                h++;
                min = 0;
                sec = 0;
            }
            timer.innerHTML = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
        }, 1000);
    } else {
        timerRunning = false;
        startBtn.textContent = 'Tęsti';
        clearInterval(interval);
    }
}

const resetTimer = () => {
    startBtn.textContent = 'Pradėti'
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    timer.innerHTML = `00:00:00`;
}

startBtn.onclick = startTimer;
resetBtn.onclick = resetTimer;