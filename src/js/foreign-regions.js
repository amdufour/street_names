import { select } from "d3-selection";
import { scaleRadial } from "d3-scale";
import { max } from "d3-array";

import { citiesDitionary, EUcountries, degreesToRadians } from "./helpers";

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
  regions.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  console.log("foreign regions", regions);


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
  countries.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  console.log("countries", countries);

  // Scales
  const radiusScale = scaleRadial()
    .domain([0, max(regions, d => d.names.length)])
    .range([0, 60]);

  // Draw circles
  const width = 600;
  const height = 600;
  const margin = { top: 100, right: 100, bottom: 100, left: 100 };
  const innerWidth = width - margin.right - margin.left;
  const innerHeight = height - margin.top - margin.bottom;

  const svg = select("#foreign")
    .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const circlesContainer = svg
    .append("g")
      .attr("transform", `translate(${innerWidth/2}, ${innerHeight/2})`);
  // const baseCircle = circlesContainer
  //   .append("circle")
  //     .attr("cx", 0)
  //     .attr("cy", 0)
  //     .attr("r", innerWidth/2)
  //     .attr("fill", "transparent")
  //     .attr("stroke", "gray");

  const startAngleTarget = 15;
  const targetAngle = 180 - (2 * startAngleTarget);
  const anglePerTarget = targetAngle / countries.length;
  countries.forEach((country, i) => {
    country["angle"] = degreesToRadians(startAngleTarget + (i * anglePerTarget) - 90);
  });
  countries.sort((a, b) => b.names.length - a.names.length);

  const targetCircles = circlesContainer
    .selectAll(".target")
    .data(countries)
    .join("circle")
      .attr("class", d => `target target-${d.id}`)
      .attr("cx", d => innerWidth/2 * Math.cos(d.angle))
      .attr("cy", d => innerWidth/2 * Math.sin(d.angle))
      .attr("r", d => radiusScale(d.names.length))
      .attr("fill-opacity", 0.3);

  const anglesCoveredByRegions = (regions.length - 1) * anglePerTarget;
  const startingAngle = ((180 - anglesCoveredByRegions) / 2) + anglesCoveredByRegions + 90;
  regions.forEach((region, i) => {
    region["angle"] = degreesToRadians(startingAngle - (i * anglePerTarget));
  });
  regions.sort((a, b) => b.names.length - a.names.length);
  const sourceCircles = circlesContainer
  .selectAll(".source")
  .data(regions)
  .join("circle")
    .attr("class", d => `source source-${d.id}`)
    .attr("cx", d => innerWidth/2 * Math.cos(d.angle))
    .attr("cy", d => innerWidth/2 * Math.sin(d.angle))
    .attr("r", d => radiusScale(d.names.length))
    .attr("fill-opacity", 0.3);

};