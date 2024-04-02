// Selecting elements
const kainaInp = document.querySelector("#kaina");
const procentaiInp = document.querySelector("#procentai");
const errorDiv = document.querySelector("#error");
const skaiciuotiBtn = document.querySelector("#skaiciuoti");

// Attach event listeners to input fields for validation
kainaInp.addEventListener("input", validateInput);
procentaiInp.addEventListener("input", validateInput);

// Function to validate input fields
function validateInput() {
    const kaina = parseFloat(kainaInp.value.replace(",", "."));
    const procentai = parseFloat(procentaiInp.value.replace(",", "."));

    if (isNaN(kaina) || kaina < 0 || kaina > 100) {
        errorDiv.textContent = "Įveskite teisingą pradinę kainą (nuo 0 iki 100)";
        errorDiv.classList.remove("d-none");
        kainaInp.classList.remove("is-valid");
        kainaInp.classList.add("is-invalid");
        skaiciuotiBtn.disabled = true;
    } else if (isNaN(procentai) || procentai < 0 || procentai > 100) {
        errorDiv.textContent = "Įveskite teisingus procentus (nuo 0 iki 100)";
        errorDiv.classList.remove("d-none");
        procentaiInp.classList.remove("is-valid");
        procentaiInp.classList.add("is-invalid");
        skaiciuotiBtn.disabled = true;
    } else {
        errorDiv.textContent = "";
        errorDiv.classList.add("d-none");
        kainaInp.classList.remove("is-invalid");
        kainaInp.classList.add("is-valid");
        procentaiInp.classList.remove("is-invalid");
        procentaiInp.classList.add("is-valid");
        skaiciuotiBtn.disabled = false;
    }
}

// Function to perform calculation
function skaiciuoti() {
    const kaina = parseFloat(kainaInp.value.replace(",", "."));
    const procentai = parseFloat(procentaiInp.value.replace(",", "."));

    if (!isNaN(kaina) && !isNaN(procentai) && kaina >= 0 && procentai >= 0 && procentai <= 100) {
        const pokytis = document.querySelector("#pokytis").value;
        let naujaKaina;
        if (pokytis === "brangsta") {
            naujaKaina = kaina * (1 + procentai / 100);
        } else if (pokytis === "pinga") {
            naujaKaina = kaina * (1 - procentai / 100);
        }

        document.querySelector("#rezultatas").textContent = `Nauja kaina: ${naujaKaina.toFixed(2)}`;
    }
}

// Attach event listener to the calculate button
skaiciuotiBtn.addEventListener("click", skaiciuoti);
