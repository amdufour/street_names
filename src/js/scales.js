import * as d3 from "d3";

export const colorScale = d3.scaleOrdinal();
export const lengthScale = d3.scaleLinear();
export let angle = 0;
export const genderScale = d3.scaleOrdinal()
  .domain(["male", "female"])
  .range(["#1B4965", "#D5573B"]);

export const initializeScales = (data, countries, fields) => {

  colorScale
    .domain(fields.map(f => f.id))
    .range(["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"]);

  const maxStreets = [];
  const lengths = [];
  countries.forEach(country => {
    const relatedData = data.find(d => d.country === country.id).data;
    const max = d3.max(relatedData, d => +d["n. of foreign cities celebrating the individual with one or more streets (current country borders)"]);
    maxStreets.push(max);
    lengths.push(relatedData.length);
  });
  const maxNumStreets = d3.max(maxStreets);
  lengthScale
    .domain([0, maxNumStreets])
    .range([0, 190]);

  angle = 2 * Math.PI / d3.max(lengths);
  console.log(maxNumStreets, angle)

};