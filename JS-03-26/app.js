
const svoris = document.getElementById('svoris');
const ugis = document.getElementById('ugis');

const calcBtn = document.getElementById('calc');

const result = document.getElementById('result');

const calculation = () => {
    const getSvoris = svoris.valueAsNumber;
    const getUgis = ugis.valueAsNumber;
    if (isNaN(getSvoris) || isNaN(getUgis)) {
        result.innerHTML = `Įvesti skaičiai yra neteisingi`
    }
    else {
        const KMI = (getSvoris / (getUgis ** 2)) * 10000;
        if (KMI < 18.5) {
            result.innerHTML = `${KMI.toFixed(1)} - <span class='text-danger'>nepakankamas</span>`;
        }
        else if (KMI >= 18.5 && KMI < 25) {
            result.innerHTML = `${KMI.toFixed(1)} - <span class='text-success'>normalus</span>`;
        }
        else if (KMI >= 25 && KMI < 30) {
            result.innerHTML = `${KMI.toFixed(1)} - <span class='text-danger'>antsvoris</span>`;
        }
        else {
            result.innerHTML = `${KMI.toFixed(1)} - <span class='text-danger'>nutukimas</span>`;
        }
    }
}

calcBtn.onclick = calculation;