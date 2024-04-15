import {RegistrationForm} from './regForm'

const vardasInp = <HTMLInputElement> document.getElementById('vardas');
const pavardeInp = <HTMLInputElement> document.getElementById('pavarde');
const gimimoMetaiInp = <HTMLInputElement> document.getElementById('gimimoMetai');

const lytisVyrasRad = <HTMLInputElement> document.getElementById('lytisVyras');
const lytisMoterisRad = <HTMLInputElement> document.getElementById('lytisMoteris');

const elPastasInp = <HTMLInputElement> document.getElementById('elPastas');
const telefonoNrInp = <HTMLInputElement> document.getElementById('telefonoNr');

const regBtn = <HTMLButtonElement> document.getElementById('regBtn');


regBtn.onclick = () => {
    const reg:RegistrationForm = {
        vardas:vardasInp.value,
        pavarde:pavardeInp.value,
        gender:lytisMoterisRad.checked ? 'moteris' : 'vyras',
        gimimoMetai:gimimoMetaiInp.valueAsNumber,
        elPastas:elPastasInp.value,
        telefonoNr:telefonoNrInp.valueAsNumber,
    }
    fetch('https://registracija-d4ccd-default-rtdb.europe-west1.firebasedatabase.app/registrations.json',{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(reg)
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log('Pridėta i duomenų baze');
        console.log(data);    
    })
}