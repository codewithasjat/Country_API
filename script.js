const response = await fetch("./data.json");
const countries = await response.json();

console.log(countries);