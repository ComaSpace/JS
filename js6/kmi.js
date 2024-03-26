const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

const calculateBMI = () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;
    const bmi = weight / (height * height);

    let bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = "Nepakankamas svoris";
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = "Normalus svoris";
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = "Viršsvoris";
    } else {
        bmiCategory = "Nutukimas";
    }

    resultDiv.innerHTML = `
    <p>Jūsų KMI yra <strong>${bmi.toFixed(2)}</strong></p>
    <p>Kategorija: <strong>${bmiCategory}</strong></p>
`;



}

calculateBtn.addEventListener("click", calculateBMI);
