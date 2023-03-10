import { citiesDitionary, countries, testNationality, EUcountries } from "./helpers";

export const loadCSVData = () => {

  // Prep steps
  const regions = require("../data/world-regions_world-bank.json");
  const dataWithCitizenship = require("../data/data_with_citizenships.json");
  console.log(dataWithCitizenship);

  let allData = JSON.parse(JSON.stringify(dataWithCitizenship));
  allData.sort((a, b) => +b["n. of foreign cities celebrating the individual with one or more streets (current country borders)"] - +a["n. of foreign cities celebrating the individual with one or more streets (current country borders)"]);
  console.log("allData", allData);
  
  let fields = [];
  dataWithCitizenship.forEach(d => {
    let field = d["field of activity"];
    if (field.includes(";")) {
      field = field.slice(0, field.indexOf(";"));
    }

    if (field === "NA") {
      field = "non available";
    }
    d["field"] = field;

    if (!fields.find(f => f.id === field)) {
      fields.push({
        id: field,
        count: 1
      });
    } else {
      const currentField = fields.find(f => f.id === field);
      currentField.count += 1;
    }
  });

  fields.sort((a, b) => b.count - a.count);
  const fieldOther = fields.find(field => field.id === "other");
  const indexOther = fields.findIndex(field => field.id === "other");
  fields.splice(indexOther, 1);
  fields.push(fieldOther);
  const fieldNA = fields.find(field => field.id === "non available");
  const indexNA = fields.findIndex(field => field.id === "non available");
  fields.splice(indexNA, 1);
  fields.push(fieldNA);

  console.log("fields", fields);

  const EUCountriesData = [];
  EUcountries.forEach(country => {
    const relatedData = dataWithCitizenship.filter(d => d["country code of the current country hosting the place of birth"] === country.id);
    EUCountriesData.push({
      country: country.id,
      data: relatedData
    });
  });
  console.log("EUCountriesData", EUCountriesData);

  return [EUCountriesData, fields, allData];

};
