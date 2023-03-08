import { select } from "d3-selection";

export const topNames = (data) => {

  select("#top-names")
    .selectAll(".name")
    .data(data)
    .join("div")
      .attr("class", d => `name ${d.gender === "female" ? "female" : "male"}`)
      .text(d => d.name)

};