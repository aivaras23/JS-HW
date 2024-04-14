import { getDetails } from './details.js';

const getResult = document.getElementById('result')!;
const nameInput = <HTMLInputElement> document.getElementById('nameInput')!;
const getInfoBtn = document.getElementById('getInfoBtn')!;


getInfoBtn.onclick = () => {
    fetch(`https://api.nationalize.io/?name=${nameInput.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data:getDetails) => {
            console.log(data);
            getResult.innerHTML = '';
            const li = document.createElement('li');
            li.innerHTML = `
            Vardas: ${data.name} <br>
            Surasta: ${data.count}
            `
            getResult.appendChild(li);
            data.country.forEach((n) => {
                const li = document.createElement('li');
                li.innerHTML = `
                Šalis: ${n.country_id} <br>
                Tikimybe: ${n.probability}
                ` 
                getResult.appendChild(li);
            })
        })
};

// ${data.country[0]} ${data.country[1]}