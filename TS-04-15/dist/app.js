const vardasInp = document.getElementById('vardas');
const pavardeInp = document.getElementById('pavarde');
const gimimoMetaiInp = document.getElementById('gimimoMetai');
const lytisVyrasRad = document.getElementById('lytisVyras');
const lytisMoterisRad = document.getElementById('lytisMoteris');
const elPastasInp = document.getElementById('elPastas');
const telefonoNrInp = document.getElementById('telefonoNr');
const regBtn = document.getElementById('regBtn');
regBtn.onclick = () => {
    const reg = {
        vardas: vardasInp.value,
        pavarde: pavardeInp.value,
        gender: lytisMoterisRad.checked ? 'moteris' : 'vyras',
        gimimoMetai: gimimoMetaiInp.valueAsNumber,
        elPastas: elPastasInp.value,
        telefonoNr: telefonoNrInp.valueAsNumber,
    };
    fetch('https://registracija-d4ccd-default-rtdb.europe-west1.firebasedatabase.app/registrations.json', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg)
    })
        .then((res) => {
        return res.json();
    })
        .then((data) => {
        console.log('Pridėta i duomenų baze');
        console.log(data);
    });
};
export {};
