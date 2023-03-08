export const loadCSVData = (countries) => {

  const data = require("../data/names_all_og.csv");

  let allData = JSON.parse(JSON.stringify(data));
  allData = allData.filter(d => countries.find(c => c.id === d["country code of the current country hosting the place of birth"]));
  allData.sort((a, b) => +b["n. of foreign cities celebrating the individual with one or more streets (current country borders)"] - +a["n. of foreign cities celebrating the individual with one or more streets (current country borders)"]);
  allData = allData.slice(0, 100);
  console.log("allData", allData);
  
  let fields = [];
  data.forEach(d => {
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

  const countriesData = [];
  countries.forEach(country => {
    const relatedData = data.filter(d => d["country code of the current country hosting the place of birth"] === country.id);
    countriesData.push({
      country: country.id,
      data: relatedData
    });
  });

  return [countriesData, fields, allData];

};
