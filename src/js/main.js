import { select } from "d3-selection";

import { loadCSVData } from "./load-data";
import { initializeScales } from "./scales";
import { drawCircle } from "./draw-circle";
import { EUcountries } from "./helpers";
import { topNames } from "./top-names";
import { drawDumbbells } from "./dumbbells";
import { drawMatrix } from "./matrix";
import { drawForeignRegions } from "./foreign-regions";

const [EUCountriesData, fields, allData] = loadCSVData();

const minNumStreet = 3;
const filteredData = [];
EUCountriesData.forEach(d => {
  filteredData.push({
    country: d.country,
    data: d.data.filter(d => +d["n. of foreign cities celebrating the individual with one or more streets (current country borders)"] >= minNumStreet)
  });
});

initializeScales(filteredData, EUcountries, fields);

const countryWrappers = select("#countries")
  .selectAll(".country-wrapper")
  .data(EUcountries)
  .join("div")
    .attr("class", "country-wrapper col-2");
countryWrappers
  .append("div")
    .attr("class", "country-label")
    .text(d => d.name);
countryWrappers
  .append("div")
    .attr("id", d => `country-${d.id}`);

// drawMatrix(top100);

drawForeignRegions(allData);

EUcountries.forEach(country => {
  const relatedData = filteredData.find(d => d.country === country.id).data;
  drawCircle(relatedData, fields, country.id);
});

const top100 = allData.slice(0, 100);
topNames(top100);

drawDumbbells(EUCountriesData);