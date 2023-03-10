import { select, selectAll } from "d3-selection";
import { scalePoint, scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { axisLeft, axisBottom } from "d3-axis";

import { countries } from "./helpers";
import { genderScale } from "./scales";

export const drawDumbbells = (data) => {

  // Prep Data
  console.log("data", data);
  data.forEach(d => {
    d["numMale"] = d.data.filter(c => c.gender === "male").length;
    d["numFemale"] = d.data.filter(c => c.gender === "female").length;
    d["diff"] = Math.abs(d.numMale - d.numFemale);
  });
  data.sort((a, b) => b.diff - a.diff);
  console.log("diff", data);

  const orderedCountries = [];
  data.forEach(d => {
    const country = countries.find(coun => coun.id === d.country);
    orderedCountries.push(country);
  });

  // Dimensions
  const width = 1140;
  const height = 1000;
  const margin = { top: 50, right: 50, left: 200, bottom: 50 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = select("#dumbbells")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const bandScale = scalePoint()
    .domain(orderedCountries.map(c => c.name))
    .range([0, innerHeight]);
  const xScale = scaleLinear()
    .domain([0, max(data, d => d.numMale)])
    .range([0, innerWidth]);

  const leftAxis = axisLeft(bandScale)
    .tickSize(-innerWidth);
  svg
    .append("g")
      .attr("class", "axis axis-y")
      .call(leftAxis);
  selectAll(".axis-y text")
    .attr("x", "-12px");

  const bottomAxis = axisBottom(xScale)
    .tickSize(0);
  svg
    .append("g")
      .attr("class", "axis axis-x")
      .attr("transform", `translate(0, ${innerHeight + 10})`)
      .call(bottomAxis);

  // Append dots
  const dumbbells = svg
    .append("g")
      .attr("class", "dumbbells")
    .selectAll(".dumbbell")
    .data(data)
    .join("g")
      .attr("class", "dumbbell");

  dumbbells
    .append("line")
      .attr("x1", d => xScale(d.numFemale))
      .attr("y1", d => bandScale(countries.find(c => c.id === d.country).name))
      .attr("x2", d => xScale(d.numMale))
      .attr("y2", d => bandScale(countries.find(c => c.id === d.country).name))
      .attr("stroke", "black")
      .attr("stroke-width", 2);
  const dumbbellRadius = 10;
  dumbbells
    .append("circle")
      .attr("cx", d => xScale(d.numMale))
      .attr("cy", d => bandScale(countries.find(c => c.id === d.country).name))
      .attr("r", dumbbellRadius)
      .attr("fill", genderScale("male"))
      .attr("stroke", "white")
      .attr("stroke-width", 2);
  dumbbells
    .append("circle")
      .attr("cx", d => xScale(d.numFemale))
      .attr("cy", d => bandScale(countries.find(c => c.id === d.country).name))
      .attr("r", dumbbellRadius)
      .attr("fill", genderScale("female"))
      .attr("fill-opacity", d => d.numFemale > 0 ? 1 : 0)
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .attr("stroke-opacity", d => d.numFemale > 0 ? 1 : 0);


};