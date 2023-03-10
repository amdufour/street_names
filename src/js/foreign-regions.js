import { select } from "d3-selection";
import { scaleRadial } from "d3-scale";
import { max } from "d3-array";

import { citiesDitionary, EUcountries, degreesToRadians, radiansToDegrees } from "./helpers";

export const drawForeignRegions = (data) => {

  // Draw circles
  const width = 600;
  const height = 600;
  const margin = { top: 100, right: 100, bottom: 100, left: 160 };
  const innerWidth = width - margin.right - margin.left;
  const innerHeight = height - margin.top - margin.bottom;

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
      if (EUcountries.find(c => c.name === country)) {
        if (!countries.find(c => c.id === country)) {
          countries.push({
            id: country,
            count: 1
          });
        } else {
          countries.find(c => c.id === country).count += 1;
        }
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

  // Create source - target data
  const links = [];
  regions.forEach(region => {
    region.names.forEach(name => {
      name.countries.forEach(country => {
        if (!links.find(link => link.source === region.id && link.target === country.id)) {
          links.push({
            source: region.id,
            target: country.id,
            count: country.count,
            names: [name]
          });
        } else {
          const relatedLink = links.find(link => link.source === region.id && link.target === country.id);
          relatedLink.count += country.count;
          relatedLink.names.push(name);
        }
      });
    });
  });
  console.log("links", links);

  // Calculate circles positions
  const startAngleTarget = 40;
  const targetAngle = 180 - (2 * startAngleTarget);
  const anglePerTarget = targetAngle / countries.length;
  countries.forEach((country, i) => {
    country["angle"] = degreesToRadians(startAngleTarget + (i * anglePerTarget) - 90);
    country["cx"] = innerWidth/2 * Math.cos(country.angle);
    country["cy"] = innerWidth/2 * Math.sin(country.angle);
    country["labelX"] = (innerWidth/2 + 20) * Math.cos(country.angle);
    country["labelY"] = (innerWidth/2 + 20) * Math.sin(country.angle);
  });
  countries.sort((a, b) => b.names.length - a.names.length);

  const anglesCoveredByRegions = (regions.length - 1) * anglePerTarget;
  const startingAngle = ((180 - anglesCoveredByRegions) / 2) + anglesCoveredByRegions + 90;
  regions.forEach((region, i) => {
    region["angle"] = degreesToRadians(startingAngle - (i * anglePerTarget));
    region["cx"] = innerWidth/2 * Math.cos(region.angle);
    region["cy"] = innerWidth/2 * Math.sin(region.angle);
    region["labelX"] = (innerWidth/2 + 20) * Math.cos(region.angle);
    region["labelY"] = (innerWidth/2 + 20) * Math.sin(region.angle);
  });
  regions.sort((a, b) => b.names.length - a.names.length);

  links.forEach(link => {
    const relatedSource = regions.find(region => region.id === link.source);
    link["sourcePosition"] = {
      x: relatedSource.cx,
      y: relatedSource.cy,
      angle: relatedSource.angle
    };
    const relatedTarget = countries.find(country => country.name === link.target);
    link["targetPosition"] = {
      x: relatedTarget.cx,
      y: relatedTarget.cy,
      angle: relatedTarget.angle
    };
  });
  links.sort((a, b) => b.count - a.count);

  // Scales
  const radiusScale = scaleRadial()
    .domain([0, max(regions, d => d.names.length)])
    .range([0, 60]);

  
  // Append svg container
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

  const linkGenerator = (d) => {
    const anchor1 = {
      x: (innerWidth/2 - 50) * Math.cos(d.sourcePosition.angle),
      y: (innerWidth/2 - 50) * Math.sin(d.sourcePosition.angle),
    };
    const anchor2 = {
      x: (innerWidth/2 - 50) * Math.cos(d.targetPosition.angle),
      y: (innerWidth/2 - 50) * Math.sin(d.targetPosition.angle),
    };
    return `M ${d.sourcePosition.x},${d.sourcePosition.y} C ${anchor1.x},${anchor1.y} ${anchor2.x},${anchor2.y} ${d.targetPosition.x},${d.targetPosition.y}`;
  };
  const linkPaths = circlesContainer
    .selectAll(".link")
    .data(links)
    .join("path")
      .attr("class", "link")
      .attr("d", d => linkGenerator(d))
      .attr("fill", "none")
      .attr("stroke", "#8B8D8E")
      .attr("stroke-width", d => d.count / 10)
      .attr("stroke-opacity", 0.15)
      .attr("stroke-linecap", "round");

  circlesContainer
    .selectAll(".bottom-target")
    .data(countries)
    .join("circle")
      .attr("class", "bottom-target")
      .attr("cx", d => d.cx)
      .attr("cy", d => d.cy)
      .attr("r", d => radiusScale(d.names.length))
      .attr("fill", "white");
  const targetCircles = circlesContainer
    .selectAll(".target")
    .data(countries)
    .join("g")
      .attr("class", d => `target target-${d.id}`);
  targetCircles
    .append("circle")
      .attr("cx", d => d.cx)
      .attr("cy", d => d.cy)
      .attr("r", d => radiusScale(d.names.length))
      .attr("fill", "#33658A")
      .attr("fill-opacity", 0.3);
  targetCircles
    .append("text")
      .attr("dominant-baseline", "middle")
      .attr("transform", d => `translate(${d.labelX}, ${d.labelY}) rotate(${radiansToDegrees(d.angle)})`)
      .text(d => d.name)
      .style("font-size", "10px");

  
  circlesContainer
    .selectAll(".bottom-source")
    .data(regions)
    .join("circle")
      .attr("class", "bottom-source")
      .attr("cx", d => d.cx)
      .attr("cy", d => d.cy)
      .attr("r", d => radiusScale(d.names.length))
      .attr("fill", "white");
  const sourceCircles = circlesContainer
    .selectAll(".source")
    .data(regions)
    .join("g")
      .attr("class", d => `source source-${d.id}`);
  sourceCircles
    .append("circle")
      .attr("cx", d => d.cx)
      .attr("cy", d => d.cy)
      .attr("r", d => radiusScale(d.names.length))
      .attr("fill", "#33658A")
      .attr("fill-opacity", 0.3);
  sourceCircles
    .append("text")
      .attr("text-anchor", "end")
      .attr("dominant-baseline", "middle")
      .attr("transform", d => `translate(${d.labelX}, ${d.labelY}) rotate(${radiansToDegrees(d.angle) + 180})`)
      .text(d => d.id)
      .style("font-size", "10px");

};