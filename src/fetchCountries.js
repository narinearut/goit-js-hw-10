export { fetchCountries };

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,flags,population,languages`
  )
    .then(e => e.json())
    .then(data => {
      return data;
    });
}