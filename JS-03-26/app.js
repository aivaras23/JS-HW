
const svoris = document.getElementById('svoris');
const ugis = document.getElementById('ugis');

const calcBtn = document.getElementById('calc');

const result = document.getElementById('result');

const calculation = () => {
    const getSvoris = svoris.valueAsNumber;
    const getUgis = ugis.valueAsNumber;
    const KMI = (getSvoris / (getUgis ** 2)) * 10000;
    result.innerHTML = `${KMI.toFixed(1)}`;
}

calcBtn.onclick = calculation;