const addButton = document.getElementById('addBtn');
const delButton = document.getElementById('delBtn');

const preke = document.getElementById('preke');
const kiekis = document.getElementById('kiekis');
const getList = document.getElementById('todoList');

// čia saugomos prekių sąrašas
let prekiuList = [];

const showTasks = () => {
    // išvalomas buvęs prekių sąrašas, kad pridedant naują prekė nesikartotu senosios.
    getList.innerHTML = '';

    // su kiekviena prekė sukasi ciklas
    prekiuList.forEach((item) => {
        // sukuriamas elementas, klasės pavadinimas, bei priskiriamas teksto kontentas iš įvesties
        const newItem = document.createElement('li');
        newItem.className = 'list-group-item';
        newItem.textContent = item;
        // Pridėdamas naujas todo į sarašą
        getList.appendChild(newItem);
    })
}

const addTask = () => {
    // gaunama informacija iš įvesties laukelių
    const gautiPreke = preke.value;
    const gautiKieki = kiekis.value;
    // Patikrinimas ar nera tuščių laukelių
    if (gautiPreke === '' || gautiKieki === '') {
        alert('Prašome užpildyti visus laukelius')
    }
    // sukuriamas vienas kintamasis kuris sujungia prekė ir kiekį į vieną eilė
    const prekes = `${gautiPreke} - ${gautiKieki} vnt`

    // prekės išsaugomos į prekių masyvą
    prekiuList.push(prekes);

    // išvalomos įvesties laukeliai
    preke.value = '';
    kiekis.value = '';

    // Iškviečiama funkcija, kuri atvaizduoja rezultatus į pirkinių sąrašą
    showTasks();

    // Iššsaugomos prekės į localstorage
    localStorage.setItem('prekiuList', JSON.stringify(prekiuList));
}

// masyvo išvalymas, bei prekių ištrinimas iš local storage
const clearTodo = () => {
    prekiuList = [];
    localStorage.removeItem('prekiuList');

    // atvaizdavimas iš naujo (local storage)
    showTasks();
}

addButton.onclick = addTask;
delButton.onclick = clearTodo;

// Pasiimame iš local storage informaciją 
const localStoragePrekiuList = localStorage.getItem('prekiuList');
// Patikriname ar localstorage buvo kintamasis prekiuList
if (localStoragePrekiuList != null) {
    prekiuList = JSON.parse(localStoragePrekiuList);
    // Jei kintamasis egzistavo, tuomet atvaizduojame užduotis
    showTasks();
}


/*
const addTask = () => {
    const gautiPreke = preke.value;
    const gautiKieki = kiekis.value;

    const newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.textContent = `${gautiPreke} - ${gautiKieki} vnt`;
    getList.appendChild(newItem);
}

*/


