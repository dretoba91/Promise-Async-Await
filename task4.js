// Task 4: get the neigher countries of Columbia

const fetchCountry = async (alpha3Code) => {
  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountryAndNeighbour = async () => {
  const columbia = await fetchCountry("col");
  console.log(columbia);

  // to fetch the neighbouring countries (borders is a property of fetched "col" object)
  // this will return arrays of Promises. make use of Promise.all() to get the arrays from the promises that was fetch.
  const neighbours = await Promise.all(
    columbia.borders.map((border) => fetchCountry(border))
  );

  console.log(neighbours);
};

fetchCountryAndNeighbour();
