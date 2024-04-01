
const _name = document.getElementById('vardas');
const surname = document.getElementById('pavarde');
const salary = document.getElementById('atlyginimas');

const addBtn = document.getElementById('addBtn');
const delBtn = document.getElementById('delBtn');

const workersList = document.getElementById('workersList');

const employeeSum = document.getElementById('employeeSum');
const employeeAvg = document.getElementById('employeeAvg');

let workersDB = [];
let employeeCalcs = [];


const showTasks = () => {

    workersList.innerHTML = '';

    workersDB.forEach((item, index) => {
        const newWorker = document.createElement('li');
        newWorker.className = 'list-group-item';
        newWorker.textContent = item;
        workersList.appendChild(newWorker);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-info float-end text-light';
        deleteButton.textContent = 'Ištrinti';
        newWorker.appendChild(deleteButton);


        deleteButton.onclick = () => {
            workersDB.splice(index, 1);
            localStorage.setItem('workersDB', JSON.stringify(workersDB));

            let total = 0;
            for (const worker of workersDB) {
                const salary = parseFloat(worker.split(' ')[2]);
                total += salary;
            }

            avg = total / workersDB.length;

            employeeSum.textContent = `${total}€`;
            employeeAvg.textContent = `${avg.toFixed(2)}€`;

            const employeeCalcs = { total: total, avg: avg };
            localStorage.setItem('employeeCalcs', JSON.stringify(employeeCalcs));

            showTasks();
        }
    })
}

let total = 0;
let avg = 0;
const addTask = () => {
    const getName = _name.value;
    const getSurname = surname.value;
    const getSalary = parseFloat(salary.value);

    if (getName === '' || getSurname === '' || getSalary === '') {
        return alert('Prašome užpildyti visus laukelius');
    }

    const fullData = `${getName} ${getSurname} ${getSalary}€`;

    workersDB.push(fullData);


    let total = 0;
    for (const worker of workersDB) {
        const salary = parseFloat(worker.split(' ')[2]);
        total += salary;
    }
    avg = total / workersDB.length;

    showTasks();
    employeeSum.textContent = `${total}€`;
    employeeAvg.textContent = `${avg.toFixed(2)}€`;

    employeeCalcs = { total: total, avg: avg };
    localStorage.setItem('employeeCalcs', JSON.stringify(employeeCalcs));

    _name.value = '';
    surname.value = '';
    salary.value = '';

    localStorage.setItem('workersDB', JSON.stringify(workersDB));
}


const clearTodo = () => {
    workersDB = [];
    total = 0;
    avg = 0;
    employeeCalcs = { total: total, avg: avg };
    localStorage.removeItem('workersDB');
    localStorage.removeItem('employeeCalcs');
    showTasks();

    employeeSum.textContent = `${total}€`;
    employeeAvg.textContent = `${avg.toFixed(2)}€`;
}

addBtn.onclick = addTask;
delBtn.onclick = clearTodo;

const localStorageWorkersList = localStorage.getItem('workersDB');
if (localStorageWorkersList != null) {
    workersDB = JSON.parse(localStorageWorkersList);
    showTasks();
}

const localStorageEmployeeDetails = localStorage.getItem('employeeCalcs');
if (localStorageEmployeeDetails != null) {
    employeeCalcs = JSON.parse(localStorageEmployeeDetails);
    employeeSum.textContent = `${employeeCalcs.total}€`;
    employeeAvg.textContent = `${employeeCalcs.avg}€`;
    showTasks();
}


/*

    const newWorker = document.createElement('li');
    newWorker.className = 'list-group-item';
    newWorker.textContent = `${getName} ${getSurname} ${getSalary} €`;
    workersList.appendChild(newWorker);
    */