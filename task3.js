// Task 3: using https://restcountries.eu/ API,
// get country where alpha3Code = col

const fetchData = async () => {
  const resp = await fetch("https://restcountries.eu/rest/v2/alpha/col");

  // to get resp in JSON format
  const country = await resp.json();
  console.log(country);
};

fetchData();
