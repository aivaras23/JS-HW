
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
        result.innerHTML = `${KMI.toFixed(1)}`;
    }
}

calcBtn.onclick = calculation;