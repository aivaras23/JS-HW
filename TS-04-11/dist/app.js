const getResult = document.getElementById('result');
const nameInput = document.getElementById('nameInput');
const getInfoBtn = document.getElementById('getInfoBtn');
getInfoBtn.onclick = () => {
    fetch(`https://api.nationalize.io/?name=${nameInput.value}`)
        .then((res) => {
        return res.json();
    })
        .then((data) => {
        console.log(data);
        getResult.innerHTML = '';
        const li = document.createElement('li');
        li.innerHTML = `${data.count} ${data.name} ${data.country[0]} ${data.country[1]}`;
        getResult.appendChild(li);
    });
};
export {};
