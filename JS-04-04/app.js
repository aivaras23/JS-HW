const getInfoBtn = document.getElementById('getInfoBtn');
const countryInfo = document.getElementById('countryInfo');

const showCountriesSelect = document.getElementById('showCountries');

fetch('https://restcountries.com/v3.1/all')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        data.forEach((country) => {
            const createCountry = document.createElement('option');
            createCountry.textContent = country.name.common;
            createCountry.value = country.cca2;
            // createCountry.value = country.name.common;
            showCountriesSelect.appendChild(createCountry);
        })
        return data;
    })

const getCountryInfo = () => {
    const selectValue = showCountriesSelect.value;
    console.log(selectValue);
    fetch(`https://restcountries.com/v3.1/alpha/${selectValue}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            data.forEach((info => {

                countryInfo.innerHTML = '';

                const currencies = Object.values(info.currencies).map(curr => curr.name).join(', ');
                const languages = Object.values(info.languages).map(lang => lang).join(', ');
                const createLi = document.createElement('li');
                createLi.className = 'info-list'
                createLi.innerHTML = `
                        Pavadinimas: ${info.name.common} <br>
                        Populiacija: ${info.population} <br>
                        Plotas: ${info.area}km² <br>
                        Valiuta: ${currencies} <br>
                        Kalba: ${languages} <br>
                        Veliava: <img src="${info.flags.svg}" class="image-svg"> 
                        Herbas: <img src="${info.coatOfArms.svg}" class="image-svg">
                        `;
                countryInfo.appendChild(createLi);
            }))
        }
        )
}

getInfoBtn.onclick = getCountryInfo;