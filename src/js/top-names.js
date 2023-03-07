import * as d3 from "d3";

export const topNames = (data) => {

  d3.select("#top-names")
    .selectAll(".name")
    .data(data)
    .join("div")
      .attr("class", d => `name ${d.gender === "female" ? "female" : "male"}`)
      .text(d => d.name)

};