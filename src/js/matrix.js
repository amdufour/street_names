import { select, selectAll } from "d3-selection";
import { scalePoint } from "d3-scale";
import { axisLeft, axisTop } from "d3-axis";

import { citiesDitionary } from "./helpers";
import { colorScale } from "./scales";

export const drawMatrix = (data) => {

  // Extract cities
  const cities = [];
  data.forEach(d => {
    const citiesList = d["list of cities celebrating the individual with one or more streets"].split("|");
    citiesList.forEach(city => {
      const cityEN = citiesDitionary.find(c => c.id === city).nameEN;
      if (!cities.find(c => c.name === cityEN)) {
        cities.push({
          name: cityEN,
          count: 1
        });
      } else {
        cities.find(c => c.name === cityEN).count += 1;
      }
    });
  });
  cities.sort((a, b) => b.count - a.count);
  console.log("cities", cities);

  let topNames = JSON.parse(JSON.stringify(data));
  topNames = topNames.slice(0, 40);

  const relationships = [];
  cities.forEach(c => {
    const city = c.name;
    const cityOG = citiesDitionary.find(c => c.nameEN === city).id;
    topNames.forEach(n => {
      const name = n.name;
      if (n["list of cities celebrating the individual with one or more streets"].includes(cityOG)) {
        if (!relationships.find(r => r.city === city && r.name === name)) {
          const fields = n["field of activity"];
          const field = fields === "NA"
            ? "non available"
            : fields.includes(";")
              ? fields.slice(0, fields.indexOf(";"))
              : fields;

          relationships.push({
            city: city,
            name: name,
            weight: 1,
            field: field
          });
        } else {
          relationships.find(r => r.city === city && r.name === name).weight += 1;
        }
      }
    });
  });
  console.log("relationships", relationships);

  // Dimensions
  const width = 1140;
  const height = 1300;
  const margin = { top: 150, right: 50, left: 220, bottom: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Append SVG container
  const svg = select("#matrix")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Scales
  const xScale = scalePoint()
    .domain(cities.map(c => c.name))
    .range([0, innerWidth]);
  const yScale = scalePoint()
    .domain(topNames.map(d => d.name))
    .range([0, innerHeight]);

  // Append axes
  const topAxis = axisTop(xScale)
    .tickSize(0);
  svg
    .append("g")
      .attr("class", "axis axis-x")
      .call(topAxis);
  selectAll(".axis-x text")
    .attr("text-anchor", "start")
    .attr("dominant-baseline", "middle")
    .attr("transform", "translate(3, -17) rotate(-90)");

  const leftAxis = axisLeft(yScale)
    .tickSize(0);
  svg
    .append("g")
      .attr("class", "axis axis-y")
      .call(leftAxis);
  selectAll(".axis-y text")
    .attr("transform", "translate(-8, 0)");

  // Add dots
  const dotsRadius = 10;
  svg
    .append("g")
      .attr("class", "matrix-dots")
    .selectAll(".matrix-dot")
    .data(relationships)
    .join("circle")
      .attr("class", d => `matrix-dot matrix-dot-${d.city}-${d.name}`)
      .attr("cx", d => xScale(d.city))
      .attr("cy", d => yScale(d.name))
      .attr("r", dotsRadius)
      .attr("fill", d => colorScale(d.field));


};