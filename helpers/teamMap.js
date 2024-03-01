const feature = topojson.feature(states, states.objects.states_20m_2017);
const projection = d3.geoAlbersUsaPr();
const path = d3.geoPath().projection(projection);
const container = d3.select("#team-map");
const aspect_ratio = 0.582;
let width;
let height;
const svg = container.append("svg");
const stateIds = ["CA", "MD", "MA", "MO", "NY", "PA", "VA", "WA"]

const paths_states = svg.selectAll(".state")
                        .data(feature.features)
                        .enter().append("path")
                        .attr("class", "state")
                        .attr('class', function(d) {
                            return stateIds.includes(d.properties["STUSPS"]) ? "team-state" : "state";
                        });

draw();

window.addEventListener("resize", draw);

function draw(){
    width = container.node().getBoundingClientRect().width;
    height = width * aspect_ratio > window.innerHeight ? window.innerHeight : width * aspect_ratio;
    svg
        .attr("width", width)
        .attr("height", height);
    fitSize([width, height], feature);
    paths_states.attr("d", path);

    d3.select
}

function fitSize(size, object){
    const width = size[0];
    const height = size[1];

    projection
        .scale(1)
        .translate([0, 0]);

    const b = path.bounds(object);
    const s = 1 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
    const t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

    projection
        .scale(s)
        .translate(t);
}