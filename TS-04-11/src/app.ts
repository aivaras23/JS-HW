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
            li.innerHTML = `${data.count} ${data.name} ${data.country[0]}`
            getResult.appendChild(li);
        })
};