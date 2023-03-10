import { citiesDitionary, EUcountries } from "./helpers";

export const drawForeignRegions = (data) => {

  const foreignNames = data.filter(d => d.region !== "EU");
  console.log("foreignNames", foreignNames);

  // Filter the names per foreign region
  const regions = [];
  foreignNames.forEach(name => {
    if (!regions.find(region => region.id === name.region)) {
      regions.push({
        id: name.region,
        names: [name]
      });
    } else {
      regions.find(region => region.id === name.region).names.push(name);
    }
  });
  regions.sort((a, b) => b.names.length - a.names.length);
  console.log(regions);


  // Filter the names per countries where they are used
  foreignNames.forEach(name => {
    const cities = name["list of cities celebrating the individual with one or more streets"].split("|");
    const countries = [];
    cities.forEach(city => {
      const country = citiesDitionary.find(c => c.id === city).country;
      if (!countries.find(c => c.id === country)) {
        countries.push({
          id: country,
          count: 1
        });
      } else {
        countries.find(c => c.id === country).count += 1;
      }
    })
    name["countries"] = countries;
  });

  let countries = [...EUcountries];
  countries.forEach(country => {
    const relatedNames = foreignNames.filter(name => name.countries.find(c => c.id === country.name));
    country["names"] = relatedNames;
  });
  countries = countries.filter(country => country.names.length > 0);
  console.log("countries", countries);


};