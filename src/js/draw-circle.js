import { select } from "d3-selection";

import { colorScale, lengthScale, angle, genderScale } from "./scales";

export const drawCircle = (data, fields, country) => {

  // Organize data
  let sortedData = [];
  fields.forEach(field => {
    const relatedData = data.filter(d => d.field === field.id);
    relatedData.sort((a, b) => +b["n. of foreign cities celebrating the individual with one or more streets (current country borders)"] - +a["n. of foreign cities celebrating the individual with one or more streets (current country borders)"]);
    relatedData.forEach(d => {
      sortedData.push(d);
    })
  });
  
  
  // Dimensions
  const width = 380;
  const height = 250;

  // Append SVG container
  const svg = select(`#country-${country}`)
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

  
  // Append lines
  svg
    .selectAll(".name-line")
    .data(sortedData)
    .join("line")
      .attr("class", "name-line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", (d, i) => lengthScale(+d["n. of foreign cities celebrating the individual with one or more streets (current country borders)"]) * Math.cos(i * angle + Math.PI))
        .attr("y2", (d, i) => lengthScale(+d["n. of foreign cities celebrating the individual with one or more streets (current country borders)"]) * Math.sin(i * angle + Math.PI))
        .attr("stroke", d => colorScale(d.field))
        .attr("stroke-width", 1.5)
        .attr("stroke-linecap", "round");
  
  svg
    .selectAll("class", ".women-dot")
    .data(sortedData)
    .join("circle")
      .attr("class", "women-dot")
      .attr("cx", (d, i) => (lengthScale(+d["n. of foreign cities celebrating the individual with one or more streets (current country borders)"]) + 8) * Math.cos(i * angle + Math.PI))
      .attr("cy", (d, i) => (lengthScale(+d["n. of foreign cities celebrating the individual with one or more streets (current country borders)"]) + 8) * Math.sin(i * angle + Math.PI))
      .attr("r", 3)
      .attr("fill", d => genderScale("female"))
      .attr("fill-opacity", d => d.gender === "male" ? 0 : 1)
      .attr("stroke", "white")
      .attr("stroke-opacity", d => d.gender === "male" ? 0 : 1)
  


};