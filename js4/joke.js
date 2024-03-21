
let x = 1;
async function loadJoke() {
    console.log("Parsiuntimas prasidejo");
    const tm = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    const joke = await tm.json();
    console.log(`Kategorija ${joke.category}`)
    console.log(joke.joke);
    // console.log("Parsiuntimas baigtas");

}

// console.log("Pirma instrukcija");
loadJoke();
// console.log("Programa baigta");



