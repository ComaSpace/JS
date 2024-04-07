const searchBtn = document.getElementById("searchBtn");
const countryNameInput = document.getElementById("countryNameInput");
const countryDetails = document.getElementById("countryDetails");
const loading = document.getElementById("loading");

const fetchCountryInfo = async (countryName) => {
    try {
        loading.style.display = "block";
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();

        if (data.length > 0) {
            const country = data[0];
            const name = country.name.common;
            const population = country.population.toLocaleString();
            const area = country.area ? country.area.toLocaleString() + " km²" : "N/A";
            const currency = country.currencies ? Object.values(country.currencies)[0].name : "N/A";
            const language = country.languages ? Object.values(country.languages)[0] : "N/A";
            const flag = country.flags ? country.flags.png : "N/A";
            const coatOfArms = country.coatsOfArms ? country.coatsOfArms.png : null;

            const countryInfoHTML = `
                <h5>${name}</h5>
                <ul>
                    <li><strong>Population:</strong> ${population}</li>
                    <li><strong>Area:</strong> ${area}</li>
                    <li><strong>Currency:</strong> ${currency}</li>
                    <li><strong>Language:</strong> ${language}</li>
                    <li><strong>Flag:</strong> <img src="${flag}" alt="Flag" style="width: 50px;"></li>
                    ${coatOfArms ? `<li><strong>Coat of Arms:</strong> <img src="${coatOfArms}" alt="Coat of Arms" style="width: 50px;"></li>` : ''}
                </ul>
            `;

            countryDetails.innerHTML = countryInfoHTML;
        } else {
            countryDetails.innerHTML = "<p>Country information not found</p>";
        }

        loading.style.display = "none";
    } catch (error) {
        console.error("Error fetching country information:", error);
        loading.style.display = "none";
        countryDetails.innerHTML = "<p>Country information not found</p>";
    }
};



searchBtn.addEventListener("click", () => {
    const countryName = countryNameInput.value.trim();
    if (countryName !== "") {
        fetchCountryInfo(countryName);
    } else {
        alert("Please enter a country name");
    }
});
