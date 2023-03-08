import { select } from "d3-selection";

import { loadCSVData } from "./load-data";
import { initializeScales } from "./scales";
import { drawCircle } from "./draw-circle";
import { countries } from "./helpers";
import { topNames } from "./top-names";
import { drawDumbbells } from "./dumbbells";

const [data, fields, top100] = loadCSVData(countries);

const minNumStreet = 3;
const filteredData = [];
data.forEach(d => {
  filteredData.push({
    country: d.country,
    data: d.data.filter(d => +d["n. of foreign cities celebrating the individual with one or more streets (current country borders)"] >= minNumStreet)
  });
});

initializeScales(filteredData, countries, fields);

const countryWrappers = select("#countries")
  .selectAll(".country-wrapper")
  .data(countries)
  .join("div")
    .attr("class", "country-wrapper col-3");
countryWrappers
  .append("div")
    .attr("id", d => `country-${d.id}`);
countryWrappers
  .append("div")
    .attr("class", "country-label")
    .text(d => d.name);


countries.forEach(country => {
  const relatedData = filteredData.find(d => d.country === country.id).data;
  drawCircle(relatedData, fields, country.id);
});

drawDumbbells(filteredData);

topNames(top100);