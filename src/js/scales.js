import { scaleOrdinal, scaleLinear } from "d3-scale";
import { max } from "d3-array";

export let colorScale;
export let lengthScale;
export let angle = 0;
export const genderScale = scaleOrdinal()
  .domain(["male", "female"])
  .range(["#C0D684", "#A30B37"]);

export const initializeScales = (data, countries, fields) => {

  colorScale = scaleOrdinal()
    .domain(fields.map(f => f.id))
    .range(["#33658A", "#86BBD8", "#758E4F", "#F6AE2D", "#F26419", "#8B8D8E"]);

  const maxStreets = [];
  const lengths = [];
  countries.forEach(country => {
    const relatedData = data.find(d => d.country === country.id).data;
    const maxCities = max(relatedData, d => +d["n. of foreign cities celebrating the individual with one or more streets (current country borders)"]);
    maxStreets.push(maxCities);
    lengths.push(relatedData.length);
  });
  const maxNumStreets = max(maxStreets);
  lengthScale = scaleLinear()
    .domain([0, maxNumStreets])
    .range([0, 145]);

  angle = 2 * Math.PI / max(lengths);
  console.log(maxNumStreets, angle)

};