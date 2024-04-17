import {RegistrationForm} from './regForm'

const vardasInp = <HTMLInputElement> document.getElementById('vardas');
const pavardeInp = <HTMLInputElement> document.getElementById('pavarde');
const gimimoMetaiInp = <HTMLInputElement> document.getElementById('gimimoMetai');

const lytisVyrasRad = <HTMLInputElement> document.getElementById('lytisVyras');
const lytisMoterisRad = <HTMLInputElement> document.getElementById('lytisMoteris');

const elPastasInp = <HTMLInputElement> document.getElementById('elPastas');
const telefonoNrInp = <HTMLInputElement> document.getElementById('telefonoNr');

const regBtn = <HTMLButtonElement> document.getElementById('regBtn');

const editForm = <HTMLElement> document.getElementById('editForm');
const updateRegistrationBtn = <HTMLButtonElement> document.getElementById('updateRegistration');
const loadDataBtn = <HTMLButtonElement> document.getElementById('loadData');

const dataTable = <HTMLElement> document.getElementById('dataTable');
const dataTableBody = <HTMLElement> document.getElementById('dataTableBody');

let regData:RegistrationForm[] = [];

regBtn.onclick = () => {
    const reg:RegistrationForm = {
        vardas:vardasInp.value,
        pavarde:pavardeInp.value,
        gender:lytisMoterisRad.checked ? 'moteris' : lytisVyrasRad.checked ? 'vyras' : 'nežinoma',
        gimimoMetai:gimimoMetaiInp.valueAsNumber,
        elPastas:elPastasInp.value,
        telefonoNr:telefonoNrInp.value,
    }
    fetch('https://registracija-d4ccd-default-rtdb.europe-west1.firebasedatabase.app/registracijos.json',{
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

const showData=()=> {
    dataTableBody.innerHTML = '';
    regData.forEach((r) => {
        const tr = document.createElement('tr');

        const vardas = document.createElement('td');
        const pavarde = document.createElement('td');
        const gimMetai = document.createElement('td');
        const lytis = document.createElement('td');
        const elPastas = document.createElement('td');
        const telNr = document.createElement('td');

        vardas.innerHTML = r.vardas;
        pavarde.innerHTML = r.pavarde;
        gimMetai.innerHTML = r.gimimoMetai.toString();
        lytis.innerHTML = r.gender;
        elPastas.innerHTML = r.elPastas;
        telNr.innerHTML = r.telefonoNr;

        tr.appendChild(vardas);
        tr.appendChild(pavarde);
        tr.appendChild(gimMetai);
        tr.appendChild(lytis);
        tr.appendChild(elPastas);
        tr.appendChild(telNr);
        dataTableBody.appendChild(tr);


        tr.onclick = () => {
            dataTable.style.display = 'none';
            editForm.style.display = 'block';

            const vardasEdit = <HTMLInputElement> document.getElementById('vardasEdit');
            const pavardeEdit = <HTMLInputElement> document.getElementById('pavardeEdit');
            const birthDateEdit = <HTMLInputElement> document.getElementById('birthDateEdit');
            const elPastasEdit = <HTMLInputElement> document.getElementById('elPastasEdit');
            const phoneEdit = <HTMLInputElement> document.getElementById('phoneEdit');

            const genderMale = <HTMLInputElement> document.getElementById('genderM');
            const genderFemale = <HTMLInputElement> document.getElementById('genderFe');

            vardasEdit.value = r.vardas;
            pavardeEdit.value = r.pavarde;
            birthDateEdit.value = r.gimimoMetai.toString();
            if(r.gender === 'male') {
                genderMale.checked = true;
                genderFemale.checked = false;
            }
            else if(r.gender === 'female') {
                genderMale.checked = false;
                genderFemale.checked = true;
            }
            else {
                genderMale.checked = false;
                genderFemale.checked = false;
            }
            elPastasEdit.value = r.elPastas;
            phoneEdit.value = r.telefonoNr.toString();

            updateRegistrationBtn.onclick = () => {
                const updateReg:RegistrationForm = {
                    vardas:vardasEdit.value,
                    pavarde:pavardeEdit.value,
                    gimimoMetai:birthDateEdit.valueAsNumber,
                    gender:genderMale.checked ? 'male' : genderFemale.checked ? 'female' : 'nežinoma',
                    elPastas:elPastasEdit.value,
                    telefonoNr:phoneEdit.value,
                }
                fetch(`https://registracija-d4ccd-default-rtdb.europe-west1.firebasedatabase.app/registracijos/${r.id}.json`,{
                    method:"PUT",
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(updateReg)
                })
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    console.log('successfully updated');
                    console.log(data);
                    dataTable.style.display='block';
                    editForm.style.display='none';
                    loadData();
                })
            }
            
        }
    })
}

const loadData = () => {
    fetch(`https://registracija-d4ccd-default-rtdb.europe-west1.firebasedatabase.app/registracijos.json`, {
        method:"GET",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then((res)=> {
        return res.json();
    })
    .then((data: {[key:string]:RegistrationForm}) => {
        regData=[];

        Object.keys(data).forEach((key)=> {
            regData.push({id:key,...data[key]});
        })
        showData(); 
    })

}
loadDataBtn.onclick = loadData;