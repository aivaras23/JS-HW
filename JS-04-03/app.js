const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

const timer = document.getElementById('timer');

const displayTimer = document.getElementById('displayTimer');

let sec = 0;
let min = 0;
let hour = 0;
let milsecs = 0;
let interval;
let timerRunning = false;

const startTimer = () => {
    if (!timerRunning) {
        timerRunning = true;
        startBtn.textContent = 'Stabdyti';
        interval = setInterval(() => {
            milsecs += 10;
            if (milsecs === 1000) {
                milsecs = 0;
                sec++;
            }
            if (sec === 60) {
                min++;
                sec = 0;
            }
            if (min === 60) {
                h++;
                min = 0;
                sec = 0;
            }
            timer.innerHTML = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}.${String(milsecs).padStart(3, '0')}`
        }, 10);
    }

    else {
        timerRunning = false;
        startBtn.textContent = 'Tęsti';
        clearInterval(interval);

        const createLi = document.createElement('li');
        createLi.className = 'list-group-item fw-bold';
        createLi.innerHTML = timer.innerHTML;
        displayTimer.appendChild(createLi);

    }
}

const resetTimer = () => {
    startBtn.textContent = 'Pradėti'
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    timer.innerHTML = `00:00:00`;

    while (displayTimer.firstChild) {
        displayTimer.removeChild(displayTimer.firstChild);
    }
}

startBtn.onclick = startTimer;
resetBtn.onclick = resetTimer;